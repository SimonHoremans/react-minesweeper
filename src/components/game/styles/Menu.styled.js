import styled from 'styled-components'
import { breakpointStyleGenerator } from '../../../Theme'

export const StyledMenu = styled.div.attrs(({theme}) => {
    return {
        colors: theme.colors.menu,
        sizes: theme.sizes.menu
    }
})`
    background-color: ${({colors}) => colors.background};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 16px 14px;
    border-radius: 15px;
    color: white;

    .buttons-top {
        display: flex;
        justify-content: flex-end;
        margin-right: 5px;
        font-size: 20px;
        color: ${({theme}) => theme.colorPalette.red[0]};
        svg:hover {
            cursor: pointer;
        }
    }

    

    ${({sizes}) => breakpointStyleGenerator([{
            values: sizes.width,
            processor: (value, unit) => {
                return `width: ${value+unit};`
            }
        }]
    )}
`