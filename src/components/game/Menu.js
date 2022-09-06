import React from 'react'
import { StyledMenu } from './styles/Menu.styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

const Menu = ({className, children, onXMark= () => {return}}) => {
  return (
    <StyledMenu className={className}>
        <div className="buttons-top">
            <FontAwesomeIcon onClick={() => onXMark()} icon={faXmark}/>
        </div>
        {children}
    </StyledMenu>
  )
}

export default Menu