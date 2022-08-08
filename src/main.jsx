import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Lobby from './pages/Lobby';
import Game from './pages/Game';
// import CreateGame from './pages/CreateGame';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/lobby' element={<Lobby />} />
          <Route path='/game' element={<Game />} />
          {/* <Route path='/create-game' element={<CreateGame />} /> */}
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
)
