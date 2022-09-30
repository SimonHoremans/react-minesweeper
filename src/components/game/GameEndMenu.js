import { StyledGameMenu } from "./styles/GameMenu.styled"
import top from '../../images/top.mp4'
import unhappy from '../../images/unhappy.mp4'
import { useContext } from "react"
import { GameContext } from "./Game"

const GameEndMenu = ({onXMark, onRetry=() => {return}, onMenu=() => {return}, success=true}) => {


  const {endTime, state} = useContext(GameContext)

  return (
    <StyledGameMenu onXMark={onXMark} buttons={[
        {
            name: 'retry',
            callback: onRetry
        },
        {
            name: 'menu',
            callback: onMenu
        }
    ]}>
        <div className="content">
        <div className="header">
          <h1>{success ? 'Congrats!' : 'Oepsie'}</h1>
        </div>
        <div className="body">
          <div className="image-container">
          <video autoPlay loop muted>
            <source src={success ? top : unhappy} type="video/mp4"/>
          </video>
          {/* <div className="video-placeholder">
              <h1>Haha funny guy</h1>
          </div> */}
          </div>
          {success && 
          <ul>
            <li>Time: {(endTime/1000).toFixed(1)}s</li>
            <li>Settings:
              <ul>
                <li>width: {state.width}</li>
                <li>height: {state.height}</li>
                <li>number of mines: {state.numberOfMines}</li>
              </ul>
            </li>
          </ul>
          }
        </div>
      </div>
    </StyledGameMenu>
  )
}

export default GameEndMenu