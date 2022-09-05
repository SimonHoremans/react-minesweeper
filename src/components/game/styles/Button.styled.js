import styled from 'styled-components'
import { theme } from '../../../Theme'

export const StyledButton = styled.button`
    font-size: ${({buttonSize}) => buttonSize}px;
    padding: ${({buttonSize, fontPaddingRatioX, fontPaddingRatioY}) => `${buttonSize*fontPaddingRatioY}px ${buttonSize*fontPaddingRatioX}px`};
    border-radius: ${({buttonSize}) => buttonSize}px;
    border: 2px solid ${({color}) => color};
    color: ${({color}) => color};
    background-color: ${({backgroundColor}) => backgroundColor};

    &:hover {
        color: ${({backgroundColor}) => backgroundColor};
        background-color: ${({color}) => color};
        cursor: pointer;
    }
    
`


StyledButton.defaultProps = {
    buttonSize: 30,
    fontPaddingRatioX: .5,
    fontPaddingRatioY: .25,
    color: theme.colors[1],
    backgroundColor: theme.colors.gameMenu
}