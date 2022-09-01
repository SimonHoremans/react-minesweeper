import {FaBomb, FaFlag} from 'react-icons/fa'
import { StyledTile } from './styles/Tile.styled'

const Tile = ({x, y, tileSelect, tileSetFlag, tileState, dimensions}) => {
  let tileContent
  let tileType
  if(tileState != null) {
    if(tileState == -1) {
      tileContent = <FaBomb/>
      tileType = 'bomb'
    }else if(tileState == -2) {
      tileContent = <FaFlag/>
      tileType = 'flag'
    } else {
      tileContent = tileState == 0 ? '' : tileState
      tileType = `${tileState}`
    }
  }
  return (
    <StyledTile width={dimensions.width} onClick={() => tileSelect(x, y)} tileType={tileType} onContextMenu={(e) =>  {e.preventDefault(); tileSetFlag(x, y)}}>
      <p>{tileContent}</p>
    </StyledTile>
  )
}

export default Tile