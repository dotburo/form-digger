import {debounce, get, has, merge, pickBy} from 'lodash-es';

const
    EVT_PUSH_STATE = 'onDiggerPushState',
    EVT_LOADING = 'onDiggerLoading',
    DEFAULTS = {
        // Required
        baseUri: '',
        form: null,
        results: null,

        // Optional
        responseItemsKey: 'data',
        paginator: null,
        renderEmptyList: () => '<div>No items found for these criteria</div>',
        renderItemList: html => `<ul>${html}</ul>`,
        renderItem: item => `<li>${JSON.stringify(item)}</li>`,
    };

/**
 * Bind the form & history event and configure the initial state.
 * @param {object} options
 * @return void
 */
export default function FormDigger (options) {
    const config = merge({}, DEFAULTS, options);

    this._lastQuery = '';

    checkConfig(config, ['form', 'results', 'baseUri']);

    let parameters = defineParameters(config);

    parameters = setInitialState.call(this, config, parameters);

    bindEvents.call(this, config, parameters);
}

/**
 * Creates a reference object of allowed parameters.
 * @param {object} options
 * @return {object}
 */
function defineParameters(options) {
    let parameters = {};

    [...options.form.elements]
        .map(field => field.name)
        .filter(field => field)
        .forEach(field => {
            parameters[field] = null;
        });

    if (options.paginator) {
        parameters.page = options.paginator.current();
    }

    return parameters;
}

/**
 * Get the current location query parameters to update the reference object of parameters and trigger the renderings.
 * @param {object} options
 * @param {object} params
 * @return {object}
 */
function setInitialState(options, params) {
    const query = window.location.search.replace('?', ''),
        queryObject = queryToObject(query);

    Object.keys(queryObject).forEach(k => {
        if (has(params, k)) {
            params[k] = queryObject[k];
        }
    });

    this._handleHistory({query: query, parameters: queryObject}, options, true);

    return params;
}

/**
 * Bind the form and history changes.
 * @param {object} options
 * @param {object} params
 * @return void
 */
function bindEvents(options, params) {
    options.form.addEventListener('change', e => this._handleEvents(e, options, params), false);

    options.form.addEventListener('input', e => this._handleEvents(e, options, params), false);

    options.form.addEventListener(EVT_PUSH_STATE, e => this._handleHistory(e.detail, options), false);

    window.addEventListener('popstate', e => this._handleHistory(e.state, options, true), false);

    if (options.paginator) {
        options.paginator.onChange(page => this._setHistory(setParameters(params, 'page', page), options));
    }
}

/**
 * React to the form changes.
 * @param {Event} e
 * @param {object} options
 * @param {object} params
 * @return void
 */
FormDigger.prototype._handleEvents = function (e, options, params) {
    const field = e.target,
        hasLength = field.dataset.minLength ? field.value.length >= +field.dataset.minLength : true,
        shouldWait = field.dataset.debounce && field.dataset.debounce !== '0',
        func = () => this._setHistory(setParameters(params, e.target.name, e.target.value), options);

    if (!hasLength) return;

    dispatchLoadingEvent(options, true);

    if (shouldWait) {
        debounce(func, +field.dataset.debounce)();
    } else {
        func();
    }
};

/**
 * React to the browser navigation.
 * @param {object} state
 * @param {object} options
 * @param {boolean} updateForm
 * @return void
 */
FormDigger.prototype._handleHistory = function (state, options, updateForm = false) {
    // Update the form fields.
    if (updateForm) {
        setForm(state.parameters, options);
    }
    // Fetch and display the results.
    this._fetchData(state.query, options).then(json => render(json, options, state.parameters));
};

/**
 * Updates the reference parameter object with the given key-value pair.
 * @param {object} params
 * @param {string} name
 * @param {string|null} value
 * @return {object}
 */
function setParameters(params, name, value = null) {
    if (params[name] || params[name] === null) {
        params[name] = value || null;
    }

    if (has(params,'page') && name !== 'page') {
        params.page = 1;
    }

    return pickBy(params);
}

/**
 * Render the results with the configured template functions.
 * @param {object} response
 * @param {object} options
 * @param {object} parameters
 * @return void
 */
function render(response, options, parameters) {
    const items = get(response, options.responseItemsKey);

    if (options.paginator) {
        options.paginator.render(response);
    }

    dispatchLoadingEvent(options, false);

    if (!items.length) {
        options.results.innerHTML = options.renderEmptyList(parameters);
        return;
    }

    let html = '';

    items.forEach(item => html += options.renderItem(item));

    options.results.innerHTML = options.renderItemList(html);
}

/**
 * Each time the form changes a new state is pushed in the browser's history.
 * @param {object} parameters
 * @param {object} options
 * @return void
 */
FormDigger.prototype._setHistory = function(parameters, options) {
    const query = (new URLSearchParams(parameters)).toString();

    if (query === this._lastQuery || !query) {
        return;
    }

    this._lastQuery = query;

    const url = window.location.pathname + '?' + query,
        event = new CustomEvent(EVT_PUSH_STATE, {detail: {query, parameters}});

    options.form.dispatchEvent(event);

    window.history.pushState({query, parameters}, document.title, url);
};

/**
 * Trigger an event at the start of the query and after rendering the results.
 * @param {object} options
 * @param {boolean} state
 * @return void
 */
function dispatchLoadingEvent(options, state) {
    const event = new CustomEvent(EVT_LOADING, {detail: {state}});

    options.form.dispatchEvent(event);
}

/**
 * Update the fields of the search form.
 * @param {object} parameters
 * @param {object} options
 * @return void
 */
function setForm(parameters, options) {
    [...options.form.elements].forEach(field => {
        if (field.name && has(parameters, field.name)) {
            field.value = parameters[field.name];
        }
    });
}

/**
 * Get the search results from the server.
 * @param {string} query
 * @param {object} options
 * @return {Promise<object>}
 */
FormDigger.prototype._fetchData = function (query, options) {
    return window
        .fetch(options.baseUri + '?' + query, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
            },
        })
        .then(response => response.json());
};

/**
 * Check if the given config keys are assigned.
 * @param {string} config
 * @param {array} keys
 * @return void
 */
function checkConfig(config, keys) {
    keys.forEach(key => {
        if (!has(config, key)) {
            throw new Error(`The ${key} property is missing`);
        }
    });
}

/**
 * Convert a query string to an object.
 * @param {string} query
 * @return {object}
 */
function queryToObject(query) {
    return [...(new URLSearchParams(query)).entries()]
        .reduce((o, [k, v]) => {
            o[k] = v;
            return o;
        }, {});
}
