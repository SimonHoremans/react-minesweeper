import { getBreakpointStyleGenerator } from "./breakpointStyleGenerator"

const colorPalette = {
  grey : [
    "rgb(37, 37, 37)",
    "rgb(90, 90, 90)",
    "rgb(118, 118, 118)",
    "rgb(141, 141, 141)",
    "rgb(163, 163, 163)",
    "rgb(197, 197, 197)"
  ],
  red : [
    "rgb(255, 121, 121)",
    "rgb(255, 87, 87)"
  ],
  yellow : [
    "rgb(255, 242, 121)", 
    "rgb(255, 236, 66)"
  ],
  green: "rgb(126, 255, 121)",
  turquoise: "rgb(121, 255, 222)",
  blue: "rgb(121, 187, 255)",
  purple: "rgb(172, 121, 255)"
}

const colors = {
  background: colorPalette.grey[0],

  board: {
    border: colorPalette.grey[3],
    background: colorPalette.grey[3]
  },

  tile: {
    border: colorPalette.grey[3],
    bomb: "white",
    flag: colorPalette.red[1],
    "0": colorPalette.grey[5],
    "1": colorPalette.blue,
    "2": colorPalette.green,
    "3": colorPalette.red[0],
    "4": colorPalette.purple,
    "5": colorPalette.yellow[0],
    "6": colorPalette.turquoise,
    "7": colorPalette.grey[4],
  },

  gameDisplay: {
    border: colorPalette.red[0],
    color: colorPalette.red[0]
  },

  statusBar: {
    background: colorPalette.grey[2],
    border: colorPalette.grey[0]
  },

  menu: {
    background: colorPalette.grey[1]
  },

  smileyFace: {
    color: colorPalette.yellow[1]
  }
}

const breakpoints = {
  xs: 0,
  sm: 567,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
}

const sizes = {
  board: {
    smallestWidth: [300, 'px'],
    spacingX: [15, 'px'],
    border: [2, 'px']
  }, 

  tile: {
    border: [2, 'px'],
    letterTileRatio: .8,
    iconTileRatio: .5
  },

  gameDisplay: {
    fontSize: [{
      xs: 20,
      sm: 40,
      lg: 50,
    }, 'px']
  },

  smileyFace: {
    fontSize: [{
      xs: 30,
      sm: 50,
      lg: 60,
    }, 'px']
  },

  menu: {
    width: [{
      xs: 300,
      sm: 425,
      lg: 605
    }, 'px']
  },

  gameMenu: {
    fontSize: [
      {
        xs: 17,
        sm: 20
      }, 'px']
  },

  button: {
    fontSize: [
      {
        xs: 20,
        sm: 30
      }, 'px']
  }
}

const fonts = {
  general: 'Arial, Helvetica, sans-serif'
}

export const theme = {
  colors: colors,
  sizes: sizes,
  fonts: fonts,
  colorPalette: colorPalette
}

export const breakpointStyleGenerator = getBreakpointStyleGenerator(breakpoints)

// export const theme = {
//     smallestBoardSize: 300,
    
//     breakpoints : {
//       xs: 0,
//       sm: 567,
//       md: 768,
//       lg: 992,
//       xl: 1200,
//       xxl: 1400
//     },
  
//     boardSpacing: 15,
//     borderSize: 2,
//     letterTileRatio: .8,
//     iconTileRatio: .5,
//     tileFontStack: "Arial, Helvetica, sans-serif",
  
//     colors: {
//         border: "rgb(141, 141, 141)",
//         bomb: "white",
//         flag: "rgb(255, 87, 87)",
//         "0": "rgb(197, 197, 197)",
//         "1": "rgb(121, 187, 255)",
//         "2": "rgb(126, 255, 121)",
//         "3": "rgb(255, 121, 121)",
//         "4": "rgb(172, 121, 255)",
//         "5": "rgb(255, 242, 121)",
//         "6": "rgb(121, 255, 222)",
//         "7": "rgb(163, 163, 163)",
//         timerBorder: "red",
//         mainBackground: "rgb(37, 37, 37)",
//         statusBar: "rgb(118, 118, 118)",
//         gameMenu: "rgb(90, 90, 90)",
//         smileyFace: "hsl(54deg, 100%, 63%)"
//       },
  
//     timerSize: {
//       xs: 20,
//       sm: 40,
//       lg: 50,
//     },
  
//     gameMenuSize: {
//       xs: 250,
//       sm: 425,
//       lg: 605
//     }
//     // tileFontStack: '"Comic Sans MS", "Comic Sans", cursive'
//   }

//   export const stylePerBreakpoint = (property, callBack) => {

//     const styles = []

//     for(const[key, value] of Object.entries(property)) {
//         styles.push(`
//             @media(min-width: ${theme.breakpoints[key]}px) {
//                 ${callBack(value)}
//             }
//         `)
//     }

//     return styles.join('\n')

//   }