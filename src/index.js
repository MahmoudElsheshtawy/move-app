import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import  GlobleProvider from './components/context/Globalcontext'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 {/* <GlobleProvider> */}
    <App />
          
 {/* </GlobleProvider>  */}

    
  </React.StrictMode>
);


