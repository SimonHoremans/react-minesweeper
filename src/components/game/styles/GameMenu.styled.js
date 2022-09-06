import styled from 'styled-components'
import DialogMenu from '../DialogMenu'
import { breakpointStyleGenerator } from '../../../Theme'

export const StyledGameMenu = styled(DialogMenu).attrs(
    ({theme}) => {
        return {
            sizes: theme.sizes.gameMenu
        }
    }
)`
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
                /* font-size: 20px; */
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


    ${({sizes}) => breakpointStyleGenerator([
        {
            values: sizes.fontSize,
            processor: (value, unit) => {
                return `
                    .body ul {
                        font-size: ${value+unit};
                    }
                `
            }
        }]
    )}
`