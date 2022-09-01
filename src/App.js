import './App.css';
import Board from './components/game/Board';
import GlobalStyles from './components/styles/Global';
import {ThemeProvider} from 'styled-components'
import Timer from './components/game/Timer';
import StatusBar from './components/game/StatusBar';


const theme = {
  smallestBoardSize: 300,
  
  breakpoints : {
    xs: 0,
    sm: 567,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400
  },

  boardSpacing: 15,
  borderSize: 2,
  letterTileRatio: .8,
  iconTileRatio: .5,
  tileFontStack: "Arial, Helvetica, sans-serif",

  colors: {
      border: "rgb(141 141 141)",
      bomb: "white",
      flag: "#ff5757",
      "0": "rgb(197 197 197)",
      "1": "rgb(121 187 255)",
      "2": "rgb(126, 255, 121)",
      "3": "rgb(255, 121, 121)",
      "4": "rgb(172, 121, 255)",
      "5": "rgb(255, 242, 121)",
      "6": "rgb(121, 255, 222)",
      "7": "rgb(163, 163, 163)",
      timerBorder: "red",
      mainBackground: "rgb(37, 37, 37)",
      statusBar: "rgb(118 118 118)",
      smileyFace: "hsl(54deg 100% 63%)"
    },

  timerSize: {
    xs: 20,
    sm: 40,
    lg: 50,
  }
  // tileFontStack: '"Comic Sans MS", "Comic Sans", cursive'
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles/>
        <StatusBar/>
        {/* <Board width={10} height={80} numberOfMines={160}/> */}
      </>
    </ThemeProvider>
    
  );
}

export default App;
