import styled, { ThemeConsumer } from 'styled-components'
import { styleString } from '../../../breakpointStyleGenerator'
import { breakpointStyleGenerator } from '../../../Theme'


export const StyledTile = styled.div.attrs(({theme, width}) => {
    const smallestTileSize = ((theme.sizes.board.smallestWidth[0] - 2*theme.sizes.board.border[0])/width)
    const sizes = theme.sizes.tile
    return {
        smallestTileSize: smallestTileSize,
        smallestFontSizeLetters: (smallestTileSize - 2*sizes.border[0])*sizes.letterTileRatio,
        smallestFontSizeIcons: (smallestTileSize - 2*sizes.border[0])*sizes.iconTileRatio,
        sizes: sizes,
        colors: theme.colors.tile
    }
})`
    width: ${({smallestTileSize}) => smallestTileSize}px;
    height: ${({smallestTileSize}) => smallestTileSize}px;
    border: ${({sizes}) => styleString(sizes.border)} solid rgb(141 141 141);
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    background-color: ${({theme}) => theme.colors.background};

    & p {
        background-color: rgba(0, 0, 0, 0)
    }

    ${({tileType, colors, smallestFontSizeIcons, smallestFontSizeLetters}) => {
        let styles = []

        if(tileType === 'flag' || tileType === 'bomb') {
            styles.push(`font-size: ${smallestFontSizeIcons}px;`)
        } else {
            styles.push(`
            font-size: ${smallestFontSizeLetters}px;
            `)
        }

        if(tileType === '0') {
            styles.push(`background-color: ${colors[tileType]};`)
        } else {
            styles.push(`color: ${colors[tileType]};`)
        }

        return styles.join('\n')
    }}

    ${({sizes, width, theme, tileType}) => {

        const boardSizes = theme.sizes.board

        return breakpointStyleGenerator([{
            values: 'relative',
            processor: (value, key) => {
                if(key === 'xs') return

                const tileSize = (value - 2*(boardSizes.border[0] + boardSizes.spacingX[0]))/width

                const fontSize = tileType === 'bomb' || tileType === 'flag' ?
                (tileSize - 2*sizes.border[0])*sizes.iconTileRatio :
                (tileSize - 2*sizes.border[0])*sizes.letterTileRatio

                return `
                    width: ${tileSize}px;
                    height: ${tileSize}px;
                    font-size: ${fontSize}px;
                `
            }
        }])
    }}

    
`