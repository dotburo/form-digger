import {merge, range} from 'lodash-es';

const DEFAULTS = {
    elements: [],
    handler: () => {},
    ellipsis: '&hellip;',
    responseKeys: {
        current: 'current_page',
        total: 'total',
        perPage: 'per_page',
    }
};

/**
 * Bind the events and define the properties.
 * @param {object} options
 * @return void
 */
export default function Paginator(options) {
    let current = 1;

    this._options = merge({}, DEFAULTS, options);

    this._options.elements = setElements(options.elements);

    bindEvents.call(this, this._options.elements);

    Object.defineProperty(this, '_current', {
        get: () => current,
        set: (value) => {
            this._options.handler(current = value);
        },
    });
}

/**
 * Change the callback function.
 * @param handler
 * @return void
 */
Paginator.prototype.onChange = function (handler) {
    this._options.handler = handler;
};

/**
 * Render the pagination links.
 * @param {object} response
 * @return void
 */
Paginator.prototype.render = function (response) {
    response = mapResponse(response, this._options.responseKeys);

    if (response.total <= 0) return;

    let totalPages = Math.round(response.total / response.perPage),
        pages = paginate(response.current, totalPages, this._options.ellipsis);

    pages = pages.map(index => renderItem({
        current: index === response.current,
        index: index,
        url: window.location.href.replace(/(page=)\d+/, '$1' + index)
    }, this._options.ellipsis));

    this._options.elements.forEach(el => {
        el.innerHTML = renderMenu(response.current, pages.join(''));
    });
};

/**
 * Get or set the current page.
 * @param {number} index
 * @return {number}
 */
Paginator.prototype.current = function (index) {
    return index ? this._current = index : this._current;
};

/**
 * Make sure we always have an array of elements.
 * @param {Node|array|NodeList} elements
 * @return {array}
 */
function setElements(elements) {
    if (Array.isArray(elements)) return elements;
    if (elements.nodeType) return [elements];
    return [...elements];
}

/**
 * Listen to click events on all pagination menus.
 * @param {array} els
 * @return void
 */
function bindEvents (els) {
    els.forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            this.current(parseInt(e.target.textContent, 10));
        }, false);
    });
}

/**
 * Translate the server response object with the configured key mapping.
 * @param {object} response
 * @param {object} responseKeys
 * @return {object}
 */
const mapResponse = (response, responseKeys) => {
    // Make sure the original reference is not altered.
    responseKeys = Object.assign({}, responseKeys);

    Object.keys(responseKeys).forEach(key => {
        responseKeys[key] = response[responseKeys[key]];
    });

    return responseKeys;
};

/**
 * Define the pages.
 * @author https://gist.github.com/kottenator/9d936eb3e4e3c3e02598?permalink_comment_id=3238804#gistcomment-3238804
 * @param {number} current
 * @param {number} total
 * @param {string} ellipsis
 * @return {array}
 */
const paginate = (current, total, ellipsis = '...') => {
    let delta;

    if (total <= 7) {
        // delta === 7: [1 2 3 4 5 6 7]
        delta = 7;
    } else {
        // delta === 2: [1 ... 4 5 6 ... 10]
        // delta === 4: [1 2 3 4 5 ... 10]
        delta = current > 4 && current < total - 3 ? 2 : 4;
    }

    const _range = {
        start: Math.round(current - delta / 2),
        end: Math.round(current + delta / 2)
    };

    if (_range.start - 1 === 1 || _range.end + 1 === total) {
        _range.start += 1;
        _range.end += 1;
    }

    let pages = current > delta
        ? range(Math.min(_range.start, total - delta), Math.min(_range.end, total) + 1)
        : range(1, Math.min(total, delta + 1) + 1);

    const withDots = (value, pair) => (pages.length + 1 !== total ? pair : [value]);

    if (pages[0] !== 1) {
        pages = withDots(1, [1, ellipsis]).concat(pages);
    }

    if (pages[pages.length - 1] < total) {
        pages = pages.concat(withDots(total, [ellipsis, total]));
    }

    return pages;
};

/**
 * Returns the HTML for a page.
 * @param {object} item
 * @param {string} ellipsis
 * @return {string}
 */
function renderItem(item, ellipsis) {
    if (!item.current && item.index !== ellipsis) {
        return `<li class="page-item"><a class="page-link" href="${item.url}">${item.index}</a></li>`;
    }

    if (item.index === ellipsis) {
        return `<li class="page-item"><span class="page-link">${item.index}</span></li>`;
    }

    return `<li class="page-item active" aria-current="page"><span class="page-link">${item.index}</span></li>`;
}

/**
 * Returns the complete pagination menu HTML.
 * @return {string}
 */
function renderMenu(current, items) {
    return `<ol class="pagination">${items}</ol>`;
}
