import { createContext, useReducer, useState, useRef } from "react"
import Minefield from '../../game/Minefield2'
import updateMinefield from '../../game/updateMinefield'
import Board from './Board'
import StatusBar from "./StatusBar"
import {DateTime} from 'luxon'
import { useLocation } from "react-router-dom"
export const GameContext = createContext(null)

const copyMap = (map) => {
    return map.map(strip => strip.slice())
}

const reducer = (state, action) => {
    let x
    let y
    let newFlags

    if(action.coordinates !== undefined) {
        x = action.coordinates[0]
        y = action.coordinates[1]
    }

    

    switch(action.type) {
        case 'TILE_SELECT':
            if(state.first) {
                const minefieldObject = new Minefield(state.width, state.height, state.numberOfMines, [x, y])
                state = {...state, ...minefieldObject.get(), first: false}
                state.setStarted(true)
                
            }

            if(state.mineMap[x][y] === -1) {
                state.setMood('sad')
                state.setStarted(false)
            }

            const minefieldUpdate = updateMinefield(state, [x, y])
            const newVisible = minefieldUpdate.newVisible
            newFlags =  minefieldUpdate.newFlags

            return {...state, visible:newVisible, flags: newFlags === null ? state.flags : newFlags}
        case 'SET_FLAG':
            newFlags = copyMap(state.flags)
            let newNumberOfHiddenMines = state.numberOfHiddenMines
            if(!state.visible[x][y]) {
                newFlags[x][y] ? newNumberOfHiddenMines++ : newNumberOfHiddenMines--
                newFlags[x][y] = !newFlags[x][y]
            }

            return {...state, flags:newFlags, numberOfHiddenMines: newNumberOfHiddenMines}
    }
}

const Game = () => {

    const location = useLocation()

    const width = location.state.width
    const height = location.state.height
    const numberOfMines = location.state.numberOfMines

    const [started, setStarted] = useState(false)
    const startTime = useRef(null)
    const endTime = useRef(null)
    const [mood, setMood] = useState('happy')
    const [showGameMenu, setShowGameMenu] = useState(false)

    const [state, dispatch] = useReducer(reducer, 
        {width: width, 
            height: height, 
            numberOfMines: numberOfMines, 
            first: true, 
            visible: Minefield.generateEmptyMap(width, height, false),
            flags: Minefield.generateEmptyMap(width, height, false),
            numberOfHiddenMines: numberOfMines,
            setStarted: setStarted,
            setMood: setMood
        })


  return (
    <GameContext.Provider value={{state, dispatch, started, startTime, endTime, mood}}>
        <StatusBar/>
        <Board/>
    </GameContext.Provider>
  )
}

export default Game