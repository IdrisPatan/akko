import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
// import App from "./App";
import HomepageLayout from "./HomePageLayout";

ReactDOM.render(<HomepageLayout />, document.getElementById('root'));
registerServiceWorker();
