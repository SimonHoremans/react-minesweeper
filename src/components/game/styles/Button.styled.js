import styled from 'styled-components'
import { theme } from '../../../Theme'
import { breakpointStyleGenerator } from '../../../Theme'

export const StyledButton = styled.button.attrs(
    ({theme}) => {
        return {
            sizes: theme.sizes.button
        }
    }
)`
    padding: ${({buttonSize, fontPaddingRatioX, fontPaddingRatioY}) => `${buttonSize*fontPaddingRatioY}px ${buttonSize*fontPaddingRatioX}px`};
    border-radius: ${({buttonSize}) => buttonSize}px;
    border: 2px solid ${({color}) => color};
    color: ${({color}) => color};
    background-color: ${({backgroundColor}) => backgroundColor};
    ${({stretch}) => stretch && `width: 100%;`}

    ${({sizes}) => {
        return breakpointStyleGenerator([{
            values: sizes.fontSize,
            processor: (value, unit) => {
                return `font-size: ${value+unit};`
            }
        }])
    }}

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
    color: theme.colorPalette.blue,
    backgroundColor: theme.colors.menu.background,
    stretch: false
}