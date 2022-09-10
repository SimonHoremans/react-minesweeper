import styled from 'styled-components'


export const StyledForm = styled.form`

    .form-body {

        width: 600px;
        display: flex;
        flex-flow: row wrap;

        .input-group {
            width: 50%;
            .input-group-content {
                display: flex;
                align-items: center;
                margin: 5px 0;


                label {
                    color: white;
                    margin-right: 5px;
                    font-size: 30px;
                }

                input {
                    font-size: 25px;
                    padding: 0 3px;
                    width: 50px;
                    height: 40px;
                    border: 2px solid ${({theme}) => theme.colorPalette.grey[5]};
                    color: white;
                    border-radius: 10px;
                    background-color: ${({theme}) => theme.colors.background}

                    
                }

                input::-webkit-outer-spin-button,
                input::-webkit-inner-spin-button {
                -webkit-appearance: none;
                margin: 0;
                }

                /* Firefox */
                input[type=number] {
                -moz-appearance: textfield;
                }
            }

            .input-group-error p {
                color: ${({theme}) => theme.colorPalette.red[0]};
            }

        }

        /* .input-group:nth-of-type(even) {
            justify-content: flex-end;
        } */

        

        
    }
`