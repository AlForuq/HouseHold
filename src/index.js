import React from 'react';
import ReactDOMClient from 'react-dom/client';
import App from './App';

import {AppProvider} from './Context/Context';

const root = ReactDOMClient.createRoot(document.getElementById('root'))

root.render(
   <AppProvider>
      <App/>
   </AppProvider>
)

