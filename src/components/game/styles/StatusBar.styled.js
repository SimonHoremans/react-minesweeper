import styled from 'styled-components'
import { breakpointStyleGenerator } from '../../../Theme'

export const StyledStatusBar = styled.div.attrs(({theme}) => {
    return {
        colors: theme.colors.statusBar,
        sizes: theme.sizes.statusBar
    }
})`
    width: 100%;
    position: sticky;
    top: 0;
    border-bottom: 5px solid ${({colors}) => colors.border};
    background-color: ${({colors}) => colors.background};
    padding: 10px 0;

    & .container {
        width: ${({theme}) => {
            const boardSize = theme.sizes.board
            return (boardSize.smallestWidth[0] - 2*boardSize.spacingX[0])
        }}px;
        margin-left: auto;
        margin-right: auto;
        display: flex;
        justify-content: space-between;
    }

    & .container > div {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    & .container > div:first-of-type {
        justify-content: flex-start;
    }

    & .container > div:last-of-type {
        justify-content: flex-end;
    }

    ${({theme}) => {
        return breakpointStyleGenerator([{
            values: 'relative',
            processor: (value, key) => {

                if(key === 'xs') return

                return `
                & .container {
                    width: ${value - theme.sizes.board.spacingX[0]*2}px;
                }
                `
            }
        }])
    }}
`