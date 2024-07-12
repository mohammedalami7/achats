import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { SidebarProvider } from './components/slidebare/sidbarecontext.jsx';
import { WishlistProvider } from './components/wishlist/wishlistContext.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <React.StrictMode>
        <WishlistProvider >
        <SidebarProvider> 
            <App />
        </SidebarProvider>
        </WishlistProvider >
    </React.StrictMode>
)

