import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { initializeIcons } from '@uifabric/icons';
import { DropdownCommandBar, HiddenCommandBar, SimpleCommandBar } from './app/app.component';

import './index.scss';

initializeIcons();

const simple = document.querySelector('#simple-search-field-component');
const dropdown = document.querySelector('#dropdown-search-field-component');
const hidden = document.querySelector('#hidden-search-field-component');

ReactDOM.render(<SimpleCommandBar />, simple);
ReactDOM.render(<DropdownCommandBar />, dropdown);
ReactDOM.render(<HiddenCommandBar />, hidden);