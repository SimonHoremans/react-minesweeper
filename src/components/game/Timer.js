import React, { useEffect, useState, useRef } from 'react'
import {DateTime} from 'luxon'
import {GameDisplay} from './styles/GameDisplay.styled'
import { GameContext } from './Game'
import { useContext } from 'react'

const Timer = () => {

    const {state, startTime, elapsedTime, setEndTime} = useContext(GameContext)

    const started = state.started
    const showPauseMenu = state.showPauseMenu
    
    const [time, setTime] = useState(null)

    useEffect(() => {

        let interval
        let counter = 0
        
        if(started) {

            if(showPauseMenu) {
                clearInterval(interval)
                elapsedTime.current += -startTime.current.diffNow()
                startTime.current = null
                setTime((elapsedTime.current/1000).toFixed(1))
            }

            else {
                startTime.current = DateTime.now()
                interval = setInterval(() => {
                    setTime(((-startTime.current.diffNow()+elapsedTime.current)/1000).toFixed(1))
                }, 100)
            }
        } else {
            if(startTime.current === null) {
                setTime((0).toFixed(1))
            } else {
                const totalTimeElapsed = elapsedTime.current-startTime.current.diffNow()
                setEndTime(totalTimeElapsed)
                setTime((totalTimeElapsed/1000).toFixed(1))
                clearInterval(interval)
            }
        }
        

        return () => {
            clearInterval(interval)
        }
    }, [started, showPauseMenu])



  return (
    <GameDisplay>
        <p>{time}</p>
    </GameDisplay>
  )
}

export default Timer