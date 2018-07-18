import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import Message from './ChatRoom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Message />, document.getElementById('root'));
registerServiceWorker();
