import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
    BrowserRouter as Router,
} from 'react-router-dom';
import AuthContextProvider from './context/AuthContext';
import TempContextProvider from "./context/TempProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Router>
        <React.StrictMode>
            <TempContextProvider>
                <AuthContextProvider>
                    <App/>
                </AuthContextProvider>
            </TempContextProvider>
        </React.StrictMode>
    </Router>
);
