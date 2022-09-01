import styled from 'styled-components'


const setFontSizeForDifferentBreakPoints = (theme) => {

    let styles = []

    for (const [key, value] of Object.entries(theme.breakpoints)) {

        // if(key === 'xs') continue
        const fontSize = theme.timerSize[key]

        styles.push(`
        @media(min-width: ${value}px) {
            font-size: ${fontSize + 10}px; 
        }
        `)
        
      }
    return styles.join('\n')
}


export const StyledSmileyFace = styled.div`

    ${({theme}) => setFontSizeForDifferentBreakPoints(theme)}

    color: ${({theme}) => theme.colors.smileyFace};

    & svg {
        cursor: pointer;
    }
`