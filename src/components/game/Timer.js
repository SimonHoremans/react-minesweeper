import React, { useEffect, useState, useRef } from 'react'
import {DateTime} from 'luxon'
import {GameDisplay} from './styles/GameDisplay.styled'
import { GameContext } from './Game'
import { useContext } from 'react'

const Timer = () => {

    const {started, startTime, endTime} = useContext(GameContext)
    
    const [time, setTime] = useState(null)

    useEffect(() => {

        let interval

        console.log('yes')
        if(started) {
            startTime.current = DateTime.now()
            interval = setInterval(() => {
                setTime((-startTime.current.diffNow()/1000).toFixed(1))
            }, 100)
        } else {
            if(startTime.current === null) {
                setTime((0).toFixed(1))
            } else {
                endTime.current = -startTime.current.diffNow()
                setTime((endTime.current/1000).toFixed(1))
                clearInterval(interval)
            }
        }
        

        return () => {
            clearInterval(interval)
        }
    }, [started])



  return (
    <GameDisplay>
        <p>{time}</p>
    </GameDisplay>
  )
}

export default Timer