
import StyledInput from '@/components/inputs/styled-input/StyledInput';
import './SignInForm.scss';
import { useForm } from 'react-hook-form';

const SignInForm = (
    {setAuthModal}
    :
    {setAuthModal: (value: string) => void}
    ) => {

    const {register, unregister, handleSubmit, formState: {errors}} = useForm();


    return (
        <div className='sign-in-container'>
            <header className='sign-in-container__header'>Вход</header>
            <form className='sign-in-form'>
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
                <button className='sign-in-form__submit-btn sign-in-submit-btn' type='submit' >Войти</button>
            </form>
            <footer className='sign-in-container__footer'>
                <span className='sign-in-container__footer-text'>Нет аккаунта?</span>
                <button 
                    onClick={()=>setAuthModal('sign-up')}
                    className='sign-in-container__footer-btn sign-up-btn'
                >
                    <span className='sign-up-btn__text'>Регистрация</span>
                    <img 
                        className='sign-up-btn__icon'
                        src='/svg/Arrow 1.svg'
                        width={41}
                        // height={}
                        loading='lazy'
                    />
                </button>
            </footer>
        </div>
    );
};

export default SignInForm;