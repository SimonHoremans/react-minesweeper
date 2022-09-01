import React, { useLayoutEffect, useReducer } from 'react'
import Minefield from '../../game/Minefield2'
import Tile from './Tile'
import { StyledBoard } from './styles/Board.styled'
import updateMinefield from '../../game/updateMinefield'


const copyMap = (map) => {
    return map.map(strip => strip.slice())
}

const reducer = (state, action) => {
    let x
    let y

    if(action.coordinates !== undefined) {
        x = action.coordinates[0]
        y = action.coordinates[1]
    }

    

    switch(action.type) {
        case 'TILE_SELECT':

            if(state.first) {
                const minefieldObject = new Minefield(state.width, state.height, state.numberOfMines, [x, y])
                state = {...minefieldObject.get(), first: false}
            }
        
            const newVisible = updateMinefield(state, [x, y])

            return {...state, visible:newVisible}
        case 'SET_FLAG':
            const newFlags = copyMap(state.flags)
            if(!state.visible[x][y]) {
                newFlags[x][y] = !newFlags[x][y]
            }

            return {...state, 'flags':newFlags}
    }
}


const Board = ({width, height, numberOfMines}) => {

    const [state, dispatch] = useReducer(reducer, 
        {width: width, 
            height: height, 
            numberOfMines: numberOfMines, 
            first: true, 
            visible: Minefield.generateEmptyMap(width, height, false),
            flags: Minefield.generateEmptyMap(width, height, false)
        })

    // useLayoutEffect(() => {
    //     const minefieldObject = new Minefield(width, height, numberOfMines, excludedTile)
    //     dispatch({type: 'INITIALIZE', minefield: minefieldObject.get()})
    // }, [])

    const getTileState = (x, y) => {
        // console.log(state)
        if(state.visible[x][y]) {
            return state.mineMap[x][y]
        } else {
            if(state.flags[x][y]) {
                return -2
            } else {
                return null
            }
        }
    }

    const tileSelect = (x, y) => {
        dispatch({type: 'TILE_SELECT', coordinates: [x, y]})
    }

    const tileSetFlag = (x, y) => {
        dispatch({type: 'SET_FLAG', coordinates: [x, y]})
    }

  return (
    <StyledBoard>
        {(() => {
            let tiles = []
            for(let y = 0; y < height; y++) {
                for(let x = 0; x < width; x++) {
                    tiles.push(<Tile x={x} y={y} tileState={getTileState(x, y)} key={(y*width)+x } tileSelect={tileSelect} tileSetFlag={tileSetFlag} dimensions={{width: width, height: height}}/>)
                }
            }
            return tiles
        })()}
    </StyledBoard>
  )
}

export default Board