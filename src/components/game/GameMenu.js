import { StyledGameMenu } from "./styles/GameMenu.styled"
import top from '../../images/top.mp4'
import { useRef } from "react"
import { useEffect } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import Button from "./Button"

const GameMenu = () => {


  return (
    <StyledGameMenu>
      <div className="buttons-top">
        <FontAwesomeIcon icon={faXmark}/>
      </div>
      <div className="content">
        <div className="header">
          <h1>Congrats!</h1>
        </div>
        <div className="body">
          <div className="image-container">
          <video autoPlay loop muted>
            <source src={top} type="video/mp4"/>
          </video>
          {/* <div className="video-placeholder">
              <h1>Haha funny guy</h1>
          </div> */}
          </div>
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
                </div>
        </div>
      <div className="buttons-bottom">
        <div><Button>Retry</Button></div>
        <div><Button>Menu</Button></div>
      </div>
    </StyledGameMenu>
  )
}

export default GameMenu