import React from 'react'
import { StyledStatusBar } from './styles/StatusBar.styled'
import Timer from './Timer'
import ScoreDisplay from './ScoreDisplay'
import SmileyFace from './SmileyFace'


const StatusBar = () => {
  return (
    <StyledStatusBar>
      <div className="container">
        <div><ScoreDisplay/></div>
        <SmileyFace happy={true}/>
        <div><Timer/></div>
      </div>
    </StyledStatusBar>
  )
}

export default StatusBar