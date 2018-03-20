// Import React
import React from 'react';
import ReactDOM from 'react-dom';

// Import Libs
import registerServiceWorker from './registerServiceWorker';

// Import Components
import Application from './components/application/Application';

// Import Styles
import './index.css';

// Render App
ReactDOM.render(<Application />, document.getElementById('root'));
registerServiceWorker();

if (module.hot && process.env.NODE_ENV !== 'production') {
  module.hot.accept('./components/application/Application', () => {
    ReactDOM.render(<Application />, document.getElementById('root'));
  });
}
