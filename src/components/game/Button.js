import React from 'react'
import { StyledButton } from './styles/Button.styled'

const Button = ({children, color, onClick, backgroundColor, stretch}) => {
  return (
    <StyledButton color={color} onClick={onClick} backgroundColor={backgroundColor} stretch={stretch}>
      {children}
    </StyledButton>
  )
}

export default Button