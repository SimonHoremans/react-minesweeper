import { GameContext } from "./Game"
import { GameDisplay } from "./styles/GameDisplay.styled"
import { useContext } from "react"

const ScoreDisplay = () => {


  const {state} = useContext(GameContext)

  return (
    <GameDisplay>
        <p>{state.numberOfHiddenMines}</p>
    </GameDisplay>
  )
}

export default ScoreDisplay