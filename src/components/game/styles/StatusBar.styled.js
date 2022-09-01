import styled from 'styled-components'

const setWidthForDifferentBreakPoints = (theme) => {

    let styles = []

    for (const [key, value] of Object.entries(theme.breakpoints)) {

        // if(key === 'xs') continue

        const widthBoard = value - 2*theme.boardSpacing
        const fontSize = theme.timerSize[key]

        styles.push(`
        @media(min-width: ${value}px) {
            & .container {
                width: ${widthBoard}px;
            }

            & #pause-button {
                font-size: ${fontSize + 10}px; 
            }
        }
        `)
        
      }
    return styles.join('\n')
}



export const StyledStatusBar = styled.div`
    
    position: sticky;
    
    background-color: ${({theme}) => theme.colors.statusBar};
    padding: 10px 0;

    & .container {
        width: ${({theme}) => theme.smallestBoardSize - 2*theme.boardSpacing}px;
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

    #pause-button {
        color: ${({theme}) => theme.colors.smileyFace};
    }

    

    width: 100%;
    ${({theme}) => setWidthForDifferentBreakPoints(theme)}
`