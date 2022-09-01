import styled from 'styled-components'

const getWidthForDifferentBreakPoints = (theme) => {

    let styleString = ''

    for (const [key, value] of Object.entries(theme.breakpoints)) {

        if(key === 'xs') continue

        styleString = styleString.concat(`
            @media(min-width: ${value}px) {
                width: ${value - theme.boardSpacing*2}px;
            }
        `)
      }
    return styleString
}


export const StyledBoard = styled.div`
    margin-top: 150px;
    margin: 15px auto;
    width: ${({theme}) => theme.smallestBoardSize}px;
    display: flex;
    flex-flow: row wrap;
    border: ${({theme}) => theme.borderSize}px solid rgb(141 141 141);
    background-color: rgb(141 141 141);

    ${({theme}) => {
        return getWidthForDifferentBreakPoints(theme)
    }}
`