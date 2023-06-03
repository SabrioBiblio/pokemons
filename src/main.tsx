import React from 'react';

import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './global.scss';
import './reset-style.scss'
import DetailPage from './pages/DetailPage/DetailPage.tsx';
import HomePage from './pages/HomePage/HomePage.tsx';
import { store } from './redux/store.ts';
import './styles/main-style.scss';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/detail',
    element: <DetailPage/>
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
