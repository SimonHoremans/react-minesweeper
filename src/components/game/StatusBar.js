import React from 'react'
import { StyledStatusBar } from './styles/StatusBar.styled'
import Timer from './Timer'
import ScoreDisplay from './ScoreDisplay'
import SmileyFace from './SmileyFace'

import { GameContext } from './Game'
import { useContext } from 'react'

const StatusBar = () => {

  const {state} = useContext(GameContext)
  const mood = state.mood

  return (
    <StyledStatusBar>
      <div className="container">
        <div><ScoreDisplay/></div>
        <SmileyFace mood={mood}/>
        <div><Timer/></div>
      </div>
    </StyledStatusBar>
  )
}

export default StatusBar