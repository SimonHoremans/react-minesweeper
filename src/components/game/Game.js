import { createContext, useReducer, useState, useRef } from "react"
import Minefield from '../../game/Minefield2'
import updateMinefield from '../../game/updateMinefield'
import Board from './Board'
import StatusBar from "./StatusBar"
import {DateTime} from 'luxon'
import { useLocation, useNavigate } from "react-router-dom"
import PauseMenu from "./PauseMenu"
import GameEndMenu from "./GameEndMenu"
export const GameContext = createContext(null)


const copyMap = (map) => {
    return map.map(strip => strip.slice())
}

function reducer(state, action) {
    let x
    let y
    let newFlags

    if(action.coordinates !== undefined) {
        x = action.coordinates[0]
        y = action.coordinates[1]
    }

    

    switch(action.type) {
        case 'TILE_SELECT':

            if(!state.playing) return state
            if(state.showPauseMenu) return state

            let newState = {...state}

            if(state.first) {
                const minefieldObject = new Minefield(state.width, state.height, state.numberOfMines, [x, y])
                newState = {...newState, ...minefieldObject.get(), first: false}
                newState.started = true
                
            }

            if(newState.mineMap[x][y] === -1) {
                newState.mood = 'sad'
                newState.started = false
                newState.showGameEndMenu = true
                newState.playing = 0
            }

            updateMinefield(newState, [x, y])


            if(newState.numberOfExposedTiles === state.numberOfTilesToExpose) {
                newState.mood = 'UwU'
                newState.started = false
                newState.showGameEndMenu = true
                newState.playing = false
            }

            return newState
        case 'SET_FLAG':

            if(!state.playing) return state
            if(state.showPauseMenu) return state
            
            newFlags = copyMap(state.flags)
            let newNumberOfHiddenMines = state.numberOfHiddenMines
            if(!state.visible[x][y]) {
                newFlags[x][y] ? newNumberOfHiddenMines++ : newNumberOfHiddenMines--
                newFlags[x][y] = !newFlags[x][y]
            }

            return {...state, flags:newFlags, numberOfHiddenMines: newNumberOfHiddenMines}
        case 'CLOSE_GAME_END_MENU':
            return {...state, showGameEndMenu: false}
        case 'OPEN_PAUSE_MENU':
            return {...state, showPauseMenu: true}
        case 'CLOSE_PAUSE_MENU':
            return {...state, showPauseMenu: false}
    }
}

const Game = () => {

    const navigate = useNavigate()

    const location = useLocation()

    const width = location.state.width
    const height = location.state.height
    const numberOfMines = location.state.numberOfMines

    const startTime = useRef(null)
    const [endTime, setEndTime] = useState(null)
    const elapsedTime = useRef(0)

    const [state, dispatch] = useReducer(reducer, 
        {width: width, 
            height: height, 
            numberOfMines: numberOfMines, 
            first: true, 
            visible: Minefield.generateEmptyMap(width, height, false),
            flags: Minefield.generateEmptyMap(width, height, false),
            numberOfHiddenMines: numberOfMines,
            started: false,
            mood: 'happy',
            showGameEndMenu: false,
            numberOfTilesToExpose: (width*height) - numberOfMines,
            numberOfExposedTiles: 0,
            playing: true,
            showPauseMenu: false
        })

    const resume = () => {
        dispatch({type: 'CLOSE_PAUSE_MENU'})
    }

    const refreshPage = () => {
        window.location.reload(false)
    }

    const onStop = () => {
        navigate('/')
    }


  return (
    <GameContext.Provider value={{state, startTime, endTime, setEndTime, elapsedTime, dispatch}}>
        <StatusBar/>
        <Board state={state} dispatch={dispatch}/>
        {state.showPauseMenu && <PauseMenu
        onXMark={resume}
        onResume={resume}
        onRetry={refreshPage}
        onStop={onStop}
        />}
        {state.showGameEndMenu && <GameEndMenu 
        success={state.mood != 'sad'}
        onXMark={() => dispatch({type: 'CLOSE_GAME_END_MENU'})}
        onRetry={refreshPage}
        onMenu={onStop}
        />

        }
    </GameContext.Provider>
  )
}

export default Game