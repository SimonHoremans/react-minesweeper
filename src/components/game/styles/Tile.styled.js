import styled from 'styled-components'


const getTileSizeForDifferentBreakPoints = (theme, width, tileType) => {

    let styleString = ''

    for (const [key, value] of Object.entries(theme.breakpoints)) {

        if(key === 'xs') continue

        const tileSize = (value - 2*(theme.borderSize + theme.boardSpacing))/width
        // const fontSizeLetters = (tileSize - 2*theme.borderSize)*theme.letterTileRatio
        // const fontSizeIcons = (tileSize - 2*theme.borderSize)*theme.iconTileRatio

        const fontSize = tileType === 'bomb' || tileType === 'flag' ?
        (tileSize - 2*theme.borderSize)*theme.iconTileRatio :
        (tileSize - 2*theme.borderSize)*theme.letterTileRatio

        styleString = styleString.concat(`
            @media(min-width: ${value}px) {
                width: ${tileSize}px;
                height: ${tileSize}px;
                font-size: ${fontSize}px;
            }
        `)
      }
    return styleString
}

export const StyledTile = styled.div.attrs(({theme, width}) => {
    const smallestTileSize = ((theme.smallestBoardSize - 2*theme.borderSize)/width)
    return {
        smallestTileSize: smallestTileSize,
        smallestFontSizeLetters: (smallestTileSize - 2*theme.borderSize)*theme.letterTileRatio,
        smallestFontSizeIcons: (smallestTileSize - 2*theme.borderSize)*theme.iconTileRatio
    }
})`
    width: ${({smallestTileSize}) => smallestTileSize}px;
    height: ${({smallestTileSize}) => smallestTileSize}px;
    border: ${({theme}) => theme.borderSize}px solid rgb(141 141 141);
    display: flex;
    flex-flow: row;
    justify-content: center;
    align-items: center;
    font-weight: bold;

    & p {
        background-color: rgba(0, 0, 0, 0)
    }

    ${({tileType, theme, smallestFontSizeIcons, smallestFontSizeLetters}) => {
        let styles = []

        if(tileType === 'flag' || tileType === 'bomb') {
            styles.push(`font-size: ${smallestFontSizeIcons};`)
        } else {
            styles.push(`
            font-size: ${smallestFontSizeLetters};
            font-family: ${theme.tileFontStack};
            `)
        }

        if(tileType === '0') {
            styles.push(`background-color: ${theme.colors[tileType]};`)
        } else {
            styles.push(`color: ${theme.colors[tileType]};`)
        }

        return styles.join('\n')
    }}

    ${({theme, width, tileType}) => getTileSizeForDifferentBreakPoints(theme, width, tileType)}

    

    
`