import './App.css';
import GlobalStyles from './components/styles/Global';
import {ThemeProvider} from 'styled-components'
import StatusBar from './components/game/StatusBar';
import Game from './components/game/Game';
import GameMenu from './components/game/GameMenu';
import {theme} from './Theme'
import {useState, useRef} from 'react'
import Button from './components/game/Button';
import DialogMenu from './components/game/DialogMenu';
import Menu from './components/game/Menu';
import PauseMenu from './components/game/PauseMenu';

function App() {

  const [showGameMenu, setShowGameMenu] = useState(false)
  const [showConfirmMenu, setShowConfirmMenu] = useState(false)
  const [showPauseMenu, setShowPauseMenu] = useState(false)
  const success = useRef(true)

  return (
    <ThemeProvider theme={theme}>
      <>
        <Button onClick={() => setShowGameMenu(true)} backgroundColor={theme.colors.background}>Menu</Button>
        <Button onClick={() => setShowConfirmMenu(true)} backgroundColor={theme.colors.background}>Confirm</Button>
        <Button onClick={() => setShowPauseMenu(true)} backgroundColor={theme.colors.background}>Pause</Button>
        <GlobalStyles/>
        {/* <Game width={20} height={20} numberOfMines={80}/> */}
        {showGameMenu && <GameMenu success={success.current} onXMark={() => setShowGameMenu(false)}/>}
        {showConfirmMenu && 
        <DialogMenu onXMark={() => setShowConfirmMenu(false)}
        buttons={[
          {
            name: 'Yes',
            callback: () => {
              setShowConfirmMenu(false)
              success.current = true
            },
            color: theme.colorPalette.green
          },
          {
            name: 'No',
            callback: () => {
              setShowConfirmMenu(false)
              success.current = false
            },
            color: theme.colorPalette.red[0]
          }
        ]}>
          <h2>Did he win?</h2>
        </DialogMenu>
        }
        {showPauseMenu &&
          <PauseMenu onXMark={() => setShowPauseMenu(false)}/>
        }
      </>
    </ThemeProvider>
    
  );
}

export default App;
