import styled from 'styled-components'


const setFontSizeForDifferentBreakPoints = (theme) => {

    let styles = []

    for (const [key, value] of Object.entries(theme.breakpoints)) {

        // if(key === 'xs') continue

        const fontSize = theme.timerSize[key]

        styles.push(`
        @media(min-width: ${value}px) {
            font-size: ${fontSize}px;
            padding: 0 ${fontSize/5}px;
        }
        `)
        
      }
    return styles.join('\n')
}


export const GameDisplay = styled.div.attrs(
   
)`
    border: 5px solid ${({theme}) => theme.colors['3']};
    border-radius: 5px;
    color: ${({theme}) => theme.colors['3']};

    background-color: ${({theme}) => theme.colors.mainBackground};

    font-weight: bold;
    font-family: ${({theme}) => theme.tileFontStack};
    ${({theme}) => setFontSizeForDifferentBreakPoints(theme)}
    
    display: inline-flex;

    
`