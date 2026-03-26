import { createRoot } from 'react-dom/client'
import * as bootstrap from 'bootstrap'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(

    <BrowserRouter>
        <App />
    </BrowserRouter>

)
