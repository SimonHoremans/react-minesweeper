import { StyledGameMenu } from "./styles/GameMenu.styled"
import top from '../../images/top.mp4'
import unhappy from '../../images/unhappy.mp4'

const GameMenu = ({onXMark, onRetry=() => {return}, onMenu=() => {return}, success=true}) => {
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
            <li>Time: 999 seconds</li>
            <li>Settings:
              <ul>
                <li>width: 20</li>
                <li>height: 20</li>
                <li>number of mines: 15</li>
              </ul>
            </li>
          </ul>
          }
        </div>
      </div>
    </StyledGameMenu>
  )
}

export default GameMenu