
import StyledInput from '@/components/inputs/styled-input/StyledInput';
import './SignUpForm.scss';
import { useForm } from 'react-hook-form';

const SignUpForm = (
    {setAuthModal}
    :
    {setAuthModal: (value: string) => void}
    ) => {

    const {register, unregister, handleSubmit, formState: {errors}} = useForm();


    return (
        <div className='sign-up-container'>
            <header className='sign-up-container__header'>Регистрация</header>
            <form className='sign-up-form'>
                <StyledInput 
                    // onlyPositiveDigits={true}
                    labelText='E-mail'
                    name='email'
                    register={register}
                    unregister={unregister}
                    errors={errors}
                />
                <StyledInput 
                    onlyPositiveDigits={true}
                    labelText='Пароль'
                    name='password'
                    type='password'
                    register={register}
                    unregister={unregister}
                    errors={errors}
                />
                <StyledInput 
                    onlyPositiveDigits={true}
                    labelText='Повторите пароль'
                    name='repeat-password'
                    type='password'
                    register={register}
                    unregister={unregister}
                    errors={errors}
                />
                <button className='sign-up-form__submit-btn sign-up-submit-btn' type='submit' >Регистрация</button>
            </form>

            <footer className='sign-up-container__footer'>
                <button 
                    onClick={()=>setAuthModal('sign-in')}
                    className='sign-up-container__footer-btn sign-in-btn'
                >
                    <img 
                        className='sign-in-btn__icon'
                        src='svg/Arrow 2.svg'
                        width={41}
                        // height={}
                        loading='lazy'
                    />
                    <span className='sign-in-btn__text'>Вход</span>
                </button>
            </footer>

        </div>
    );
};

export default SignUpForm;