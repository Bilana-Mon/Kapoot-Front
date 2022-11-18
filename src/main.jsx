import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoutes from './cmps/PrivateRoutes';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Lobby from './pages/Lobby';
import Game from './pages/Game';
import Questionnaire from './pages/Questionnaire';
import { Layout } from './cmps/Layout';
import './index.css';
import { FromRedirect } from './pages/FromRedirect';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/fromRedirect" element={<FromRedirect />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/" element={<Layout />}>
                    <Route path="" element={<Home />} />
                    <Route path="questionnaire" element={<Questionnaire />} />
                    <Route
                        path="questionnaire/:questionnaireId"
                        element={<Questionnaire />}
                    />
                    <Route path="game" element={<Game />} />
                    <Route path="lobby" element={<Lobby />} />
                    <Route element={<PrivateRoutes />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
