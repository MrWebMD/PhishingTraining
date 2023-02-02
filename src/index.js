import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/Theme.scss';
import App from './App';
import Layout from './Components/Layout/Layout';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <App />
    </Layout>
  </React.StrictMode>
);
