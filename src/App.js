import './App.css';
import GlobalStyles from './components/styles/Global';
import {ThemeProvider} from 'styled-components'
import StatusBar from './components/game/StatusBar';
import Game from './components/game/Game';
import GameMenu from './components/game/GameMenu';
import {theme} from './Theme'



function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <GameMenu/>
        {/* <Game width={20} height={20} numberOfMines={80}/> */}
      </>
    </ThemeProvider>
    
  );
}

export default App;
