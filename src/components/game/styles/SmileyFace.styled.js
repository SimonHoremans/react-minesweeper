import styled from 'styled-components'
import { breakpointStyleGenerator } from '../../../Theme'


export const StyledSmileyFace = styled.div`

    ${({theme}) => {

        return breakpointStyleGenerator([{
            values: theme.sizes.smileyFace.fontSize,
            processor: (value, unit) => {
                return `font-size: ${value+unit};`
            }
        }])
    }}

    color: ${({theme}) => theme.colors.smileyFace.color};

    & svg {
        cursor: pointer;
    }
`