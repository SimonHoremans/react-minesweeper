import styled from 'styled-components'
import { stylePerBreakpoint } from '../../../Theme'




export const StyledGameMenu = styled.div`
    background-color: ${({theme}) => theme.colors.gameMenu};
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${({theme}) => theme.tileFontStack};
    padding: 16px 14px;
    border-radius: 15px;
    color: white;

    .buttons-top {
        display: flex;
        justify-content: flex-end;
        margin-right: 5px;
        font-size: 20px;
        color: ${({theme}) => theme.colors[3]};
        svg:hover {
            cursor: pointer;
        }
    }

    .content {
        h1 {
            text-align: center;
        }

        video,
        .video-placeholder {
            width: 100%;
        }

        .video-placeholder {
            background-color: black;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .image-container {
            /* display: flex;
            justify-content: center;
            align-items: center; */
            overflow: hidden;
            position: relative;
        }

        .header {
            margin-bottom: 10px;
        }

        .body {
            div, > ul {
                margin: 8px 0;
                > li {
                    margin: 8px 0;
                }
            }

            ul {
                list-style: none;
                font-size: 20px;
            }

            > ul ul {
                margin-left: 15px;
                margin-top: 5px;
                display: flex;
                flex-flow: row wrap;
                justify-content: flex-start;

                li {
                    width: 50%;
                    margin-bottom: 5px;
                    /* display: block; */
                }
        }
    }

    }
    
    .buttons-bottom {
        display: flex;
        justify-content: space-between;

        /* > div:first-of-type {
            justify-items: flex-start;
        }

        > div:last-of-type {
            justify-self: flex-end;
        } */

    }


    ${({theme}) => stylePerBreakpoint(theme.gameMenuSize, (value) => {
        return `width: ${value}px;`
    })}

`