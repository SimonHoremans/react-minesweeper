import React, { useContext } from 'react'
import Tile from './Tile'
import { StyledBoard } from './styles/Board.styled'
import { GameContext } from './Game'



const Board = ({state, dispatch}) => {

    // const {state, dispatch} = useContext(GameContext)

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
    <StyledBoard width={state.width}>
        {(() => {
            let tiles = []
            for(let y = 0; y < state.height; y++) {
                for(let x = 0; x < state.width; x++) {
                    tiles.push(<Tile x={x} y={y} tileState={getTileState(x, y)} key={(y*state.width)+x } tileSelect={tileSelect} tileSetFlag={tileSetFlag} dimensions={{width: state.width, height: state.height}}/>)
                }
            }
            return tiles
        })()}
    </StyledBoard>
  )
}

export default Board