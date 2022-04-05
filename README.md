# Form Digger

![](https://img.shields.io/github/tag/dotburo/form-digger.svg?label=version&style=flat)
[![Maintainability](https://api.codeclimate.com/v1/badges/a9396205396f288f62e7/maintainability)](https://codeclimate.com/github/dotburo/form-digger/maintainability)
![npm](https://img.shields.io/npm/dw/@dotburo/form-digger)

Generic form parser and server fetch with optional pagination of results. Vanilla Javascript.  
<br>
<a href="https://dotburo.github.io/form-digger/" target="_blank" rel="noopener">&rsaquo;_&thinsp;demo</a>

## Features
* Sets query parameters automatically from named form inputs
* Updates the browser's URL and history with changed form inputs
* Make automatic GET requests on each form `change` and `input` event
* Included but optional pagination of results

## Install with [npm](https://www.npmjs.com/package/@dotburo/form-digger)
```
npm i @dotburo/form-digger
```

## Usage
```js
import {FormDigger} from 'src/FormDigger.js';
import {Paginator} from 'src/Paginator.js';

const paginator = new Paginator({
    elements: document.querySelectorAll('.pagination'),
});

const digger = new FormDigger({
    baseUri: '/api/v1/items/search',
    form: document.querySelector('form'),
    results: document.querySelector('.results'),
    renderItem: item => `<li>Item: ${item.name}</li>`,
    paginator: paginator,
});
```

## All options
### baseUri
The URI to which the query parameters will be appended to make the GET request. Default: empty string
### form
The form HTML element which should be interpreted. Default: `null`
### results
The HTML element to display the results. Default: `null`
### renderEmptyList 
Function to return HTML on empty results. Default `parameters => '<div>No items found for these criteria</div>'`
### renderItemList
Function to render the result list wrapper. Default: ``html => `<ul>${html}</ul>``
### renderItem
Function to render each item. Default: ``item => `<li>${JSON.stringify(item)}</li>``
### responseItemsKey:
Property name in the server response which contains the results. Works with the default Laravel `data` property. `Default: 'data'`
### paginator
Optional Paginator instance, see `src/Paginator`. Default: `null`

## Field attributes
### data-debounce="number"
Delay server fetching by the number of milliseconds.
### data-min-length="number"
Minimum number of characters from which server requests will be made.

## Events
Events are dispatched on the form element.
### onDiggerLoading
Custom event at the start of the query and after rendering the results.
### onDiggerPushState
Custom event triggered on each form change.

## Paginator options
### elements
HTML elements in which to render the pagination menu. Default: `[]`
### responseKeys
Map of key names of the server response properties required for the pages calculation. Works with the default Laravel pagination properties. Default:  
```
{
    current: 'current_page',
    total: 'total',
    perPage: 'per_page',
}
```

## License
GNU General Public License (GPL). Please see the [license file](LICENSE.md) for more information.
