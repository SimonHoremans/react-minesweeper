import React from 'react'
import { StyledButton } from './styles/Button.styled'

const Button = ({children, color, onClick}) => {
  return (
    <StyledButton color={color} onClick={onClick}>
      {children}
    </StyledButton>
  )
}

export default Button