import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//react reduxten gelen sağlayıcı
import { Provider } from 'react-redux';
//store çağrılır
import store from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //provider yardımıyla store da tutulan verileri uygulamaya aktarma
  // appta bizim tüm uydulamalarımız olduğu için ona aktarmış olduk

  <Provider store={store}>
    <App />
  </Provider>


);

