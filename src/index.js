import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Library from './components/Library';
import store from './redux/configureStore';
import { Provider } from 'react-redux';
import './styles.css';

const container = document.getElementById('root');
const root = ReactDOMClient.createRoot(container);

root.render(
  <Provider store={store}>
    <Library />
  </Provider>
);
