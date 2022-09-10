import {FaBomb, FaFlag} from 'react-icons/fa'
import { StyledTile } from './styles/Tile.styled'

const Tile = ({x, y, tileSelect, tileSetFlag, tileState}) => {
  let tileContent
  let tileClasses = ['tile']
  if(tileState != null) {
    if(tileState == -1) {
      tileContent = <FaBomb/>
      tileClasses.push('bomb', 'icon')
    }else if(tileState == -2) {
      tileContent = <FaFlag/>
      tileClasses.push('flag', 'icon')
    } else {
      tileContent = tileState == 0 ? '' : tileState
      tileClasses.push(`number-${tileState}`, 'letter')
    }
  }
  return (
    <div onClick={() => tileSelect(x, y)} className={tileClasses.join(' ')} onContextMenu={(e) =>  {e.preventDefault(); tileSetFlag(x, y)}}>
      <p>{tileContent}</p>
    </div>
  )
}

export default Tile