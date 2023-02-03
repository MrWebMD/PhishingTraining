import React from 'react';
import ReactDOM from 'react-dom/client';
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'
import './styles/Theme.scss';
import App from './App';
import Layout from './Components/Layout/Layout';
import AOSWrapper from './Components/AOS';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AOSWrapper/>
    <ReactNotifications />
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
