import {  } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter} from "react-router-dom";
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import BasketProvider from './Context/BasketContext.jsx';

createRoot(document.getElementById('root')).render(
  <BasketProvider>
    <BrowserRouter>
    <App />
  </BrowserRouter>,
  </BasketProvider>
)
