import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
// import Header from './Componet/header';
import Componet from './componet';
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainRouter from './mainrouter';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<><RouterProvider router={MainRouter}/></>
);

reportWebVitals();
