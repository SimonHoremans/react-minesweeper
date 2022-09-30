import { theme } from "../../Theme"
import Button from "./Button"
import { StyledForm } from "./styles/Form.styled"
import { StyledSubMenu } from "./styles/SubMenu.styled"
import BackButton from "./BackButton"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const CustomGameMode = () => {

    const navigate = useNavigate()


    const schema = yup.object({
        width: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .typeError('Width has to be a numeric value')
        .required()
        .min(5, 'Width must be at least 5')
        .max(50, 'Width cannot exceed 50'),

        height: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .typeError('Height has to be a numeric value')
        .required()
        .min(5, 'Height must be at least 5')
        .max(50, 'Height cannot exceed 50'),

        numberOfMines: yup
        .number()
        .transform(value => (isNaN(value) ? undefined : value))
        .required()
        .typeError('Number of mines has to be a numeric value')
        .min(1, 'The minefield has to have at least one mine')
        .test({
            name: 'max',
            exclusive: false,
            params: {},
            message: `Only 50% of the tiles can have mines.`,
            test: (value, context) => {
                return (value/(context.parent.width*context.parent.height)) <= .5
            }
        })
    })
    const { register, handleSubmit, watch, formState: { errors } } = useForm({resolver: yupResolver(schema)});

    const backgroundColor = theme.colors.background
    const onSubmit = (data) => {
        navigate('/minefield', {state: data})
    }

  return (
    <StyledSubMenu>
        <div className='main-content'>
            <StyledForm onSubmit={handleSubmit(onSubmit)}>
                <div className='container'>
                    <div className="form-body">
                        <div className="input-group">
                            <div className='input-group-content'>
                                <label htmlFor='width'>Width: </label>
                                <input type='number' id='width' {...register('width')}/>
                            </div>
                            <div className="input-group-error">
                                <p>{errors.width?.message}</p>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className='input-group-content'>
                                <label htmlFor='height'>Height: </label>
                                <input type='number' id='height' {...register('height')}/>
                            </div>
                            <div className="input-group-error">
                                <p>{errors.height?.message}</p>
                            </div>
                        </div>
                        <div className="input-group">
                            <div className='input-group-content'>
                                <label htmlFor='numberOfMines'>Number of mines: </label>
                                <input type='number' id='numberOfMines' {...register('numberOfMines')}/>
                            </div>
                            <div className="input-group-error">
                                <p>{errors.numberOfMines?.message}</p>
                            </div>
                        </div>
                    </div>
                    <div className='form-footer'>
                        <Button backgroundColor={backgroundColor}>Play</Button>
                    </div>
                </div>
            </StyledForm>
        </div>
        <div className='footer-buttons'>
            <BackButton/>
        </div>
    </StyledSubMenu>
    
  )
}

export default CustomGameMode