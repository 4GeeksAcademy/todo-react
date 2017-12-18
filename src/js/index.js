import React from 'react';
import ReactDOM from 'react-dom';

import $ from "jquery";
import 'bootstrap';
import '../styles/index.scss';

import {Layout} from './layout/Layout.jsx';


// Add CSS files to bundle
//require('../css/styles.scss');
// Render application to DOM
ReactDOM.render(
    <Layout />,
    document.querySelector('#app')
);