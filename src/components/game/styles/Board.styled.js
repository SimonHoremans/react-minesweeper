import styled from 'styled-components'
import { breakpointStyleGenerator } from '../../../Theme'
import { styleString } from '../../../breakpointStyleGenerator'


export const StyledBoard = styled.div.attrs(({theme, width}) => {

    const smallestTileSize = ((theme.sizes.board.smallestWidth[0] - 2*theme.sizes.board.border[0])/width)
    const tileSizes = theme.sizes.tile

    return {
        sizes: theme.sizes.board,
        colors: theme.colors.board,
        smallestTileSize: smallestTileSize,
        smallestFontSizeLetters: (smallestTileSize - 2*tileSizes.border[0])*tileSizes.letterTileRatio,
        smallestFontSizeIcons: (smallestTileSize - 2*tileSizes.border[0])*tileSizes.iconTileRatio,
        tileSizes: tileSizes,
        tileColors: theme.colors.tile
    }
})`
    margin-top: 150px;
    margin: 15px auto;
    width: ${({sizes}) => styleString(sizes.smallestWidth)};
    display: flex;
    flex-flow: row wrap;
    border: ${({sizes}) => styleString(sizes.border)} solid ${({colors}) => colors.border};
    background-color: ${({colors}) => colors.background};


    //styling for tile start
    .tile {
        width: ${({smallestTileSize}) => smallestTileSize}px;
        height: ${({smallestTileSize}) => smallestTileSize}px;
        border: ${({tileSizes}) => styleString(tileSizes.border)} solid rgb(141 141 141);
        display: flex;
        flex-flow: row;
        justify-content: center;
        align-items: center;
        font-weight: bold;
        background-color: ${({theme}) => theme.colors.background};

        p {
            background-color: rgba(0, 0, 0, 0);
        }
    }

    .icon {
        font-size: ${({smallestFontSizeIcons}) => smallestFontSizeIcons}px;
    }

    .letter {
        font-size: ${({smallestFontSizeLetters}) => smallestFontSizeLetters}px;
    }

    .number-0 {
        background-color: ${({tileColors}) => tileColors[0]};
    }

    .flag {
        color: ${({tileColors}) => tileColors.flag};
    }

    .bomb {
        color: ${({tileColors}) => tileColors.bomb};
    }

    ${({tileColors}) => {
        const styles = []

        for(const [number, color] of Object.entries(tileColors)) {

            if(isNaN(number)) continue

            styles.push(`
            .number-${number} {
                color: ${color};
            }
            `)
        }

        return styles.join('\n')
    }}

    //styling for tile end

    ${({sizes, tileSizes, width}) =>{
        return breakpointStyleGenerator([{
            values: 'relative',
            processor: (value, key) => {

                if(key === 'xs') return

                const tileSize = (value - 2*(sizes.border[0] + sizes.spacingX[0]))/width

                const fontSizeIcon = (tileSize - 2*tileSizes.border[0])*tileSizes.iconTileRatio
                const fontSizeLetter = (tileSize - 2*tileSizes.border[0])*tileSizes.letterTileRatio


                return `
                width: ${value - sizes.spacingX[0]*2}px;

                //styling for tile start

                .tile {
                    width: ${tileSize}px;
                    height: ${tileSize}px;
                    

                    
                }

                .icon {
                    font-size: ${fontSizeIcon}px;
                }

                .letter {
                    font-size: ${fontSizeLetter}px;
                }

                //styling for tile end
                `
            }
        }])
    }
    } 
`