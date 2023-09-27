/* import './css/index.css'; */

import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './App.tsx';
import '@/themes/superhero/bootstrap.min.css';
/* import '@/themes/morph/bootstrap.min.css'; */
/* import '@/themes/pulse/bootstrap.min.css'; */
import { UserProvider } from './context/user/index.ts';
import ProductProvider from './context/product/ProductProvider.tsx';
import OrderProvider from './context/order/store/OrderProvider.tsx';
import TicketProvider from './pages/Tickets/context/TicketProvider.tsx';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <UserProvider>
        <ProductProvider>
          <OrderProvider>
            <TicketProvider>
            <App />
            </TicketProvider>
          </OrderProvider>
        </ProductProvider>
      </UserProvider>
    </HashRouter>
  </React.StrictMode>,
);

