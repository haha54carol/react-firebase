import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Message from './ChatRoom'
import SignIn from './AuthPage/SignIn'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SignIn />, document.getElementById('root'));
registerServiceWorker();
