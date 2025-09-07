import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { StrictMode } from 'react';
import CartProvider from './Components/CartContext.jsx';

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <CartProvider >
            <App />
        </CartProvider>
    </StrictMode>
);
