import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import PrivateRoutes from './cmps/PrivateRoutes';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Lobby from './pages/Lobby';
import Game from './pages/Game';
// import CreateGame from './pages/CreateGame';
import Questionnaire from './pages/Questionnaire';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/questionnaire' element={<Questionnaire />}/>
        <Route path='/questionnaire/:questionnaireId' element={<Questionnaire />}/>
          <Route path='/game' element={<Game />} />
        <Route element={<PrivateRoutes />}>
          <Route path='/lobby' element={<Lobby />} />
          {/* <Route path='/create-game' element={<CreateGame />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
