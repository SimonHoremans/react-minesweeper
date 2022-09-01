import React, { useEffect, useState, useRef } from 'react'
import {DateTime} from 'luxon'
import {GameDisplay} from './styles/GameDisplay.styled'

const Timer = () => {

    const startTime = useRef(null)
    const [time, setTime] = useState(null)

    useEffect(() => {
        console.log('yes')

        startTime.current = DateTime.now()
        const interval = setInterval(() => {
            setTime((-startTime.current.diffNow()/1000).toFixed(1))
        }, 100)

        return () => {
            clearInterval(interval)
        }
    }, [])



  return (
    <GameDisplay>
        <p>{time}</p>
    </GameDisplay>
  )
}

export default Timer