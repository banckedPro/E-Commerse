import { ChakraProvider } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </Provider>
  </BrowserRouter>
);
