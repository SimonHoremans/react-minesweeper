import './App.css';
import GlobalStyles from './components/styles/Global';
import {ThemeProvider} from 'styled-components'
import StatusBar from './components/game/StatusBar';
import Game from './components/game/Game';
import {theme} from './Theme'
import {useState, useRef} from 'react'
import Button from './components/game/Button';
import DialogMenu from './components/game/DialogMenu';
import Menu from './components/game/Menu';
import PauseMenu from './components/game/PauseMenu';
import {Navigate, Route, Routes} from 'react-router-dom'
import MainMenu from './components/game/MainMenu';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        {/* <Game width={20} height={20} numberOfMines={80}/> */}
        <Routes>
          <Route path='/' element={<Navigate to='/mainMenu'/>}/>
          <Route path='/mainMenu/*' element={<MainMenu/>}/>
          <Route path='/minefield' element={<Game/>}/>
        </Routes>
      </>
    </ThemeProvider>
    
  );
}

export default App;
