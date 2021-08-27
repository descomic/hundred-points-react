import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

// Adding bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'

window.onbeforeunload = () => {
  return "You will lose all your game data.\nThis app does not support cookies"
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
