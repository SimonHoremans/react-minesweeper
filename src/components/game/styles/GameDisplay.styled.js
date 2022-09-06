import styled from 'styled-components'
import { breakpointStyleGenerator } from '../../../Theme'

export const GameDisplay = styled.div.attrs(({theme}) => {
    return {
        colors: theme.colors.gameDisplay,
        sizes: theme.sizes.gameDisplay
    }
}
   
)`
    border: 5px solid ${({colors}) => colors.border};
    border-radius: 5px;
    color: ${({colors}) => colors.color};

    background-color: ${({theme}) => theme.colors.background};

    font-weight: bold;

    ${({sizes}) => {
        return breakpointStyleGenerator([{
            values: sizes.fontSize,
            processor: (value, unit) => {
                return `
                font-size: ${value + unit};
                padding: 0 ${(value/5) + unit};
                `
            }
        }])
    }}
    
    display: inline-flex;

    
`