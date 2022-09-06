import styled from 'styled-components'
import { breakpointStyleGenerator } from '../../../Theme'
import { styleString } from '../../../breakpointStyleGenerator'


export const StyledBoard = styled.div.attrs(({theme}) => {
    return {
        sizes: theme.sizes.board,
        colors: theme.colors.board
    }
})`
    margin-top: 150px;
    margin: 15px auto;
    width: ${({sizes}) => styleString(sizes.smallestWidth)};
    display: flex;
    flex-flow: row wrap;
    border: ${({sizes}) => styleString(sizes.border)} solid ${({colors}) => colors.border};
    background-color: ${({colors}) => colors.background};

    ${({sizes}) =>{
        return breakpointStyleGenerator([{
            values: 'relative',
            processor: (value, key) => {
                if(key === 'xs') return
                return `width: ${value - sizes.spacingX[0]*2}px;`
            }
        }])
    }
    }
`