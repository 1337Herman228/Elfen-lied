
import { useEffect, useState } from 'react';
import './StyledInput.scss';

const StyledInput = (
    {
        register,
        unregister,
        type = 'text',
        isPhone = false,
        name,
        labelText,
        minLength = 3,
        onlyLettersAndDigits,
        onlyPositiveDigits, 
        errors,
        // defaultValue = '',
    }
    :
    {
        labelText:string,
        register?:any,
        unregister?:any,
        type?:string,
        isPhone?:boolean,
        name:string,
        onlyLettersAndDigits?:boolean,
        onlyPositiveDigits?:boolean,
        errors:any,
        minLength?:number,
    }) => {

    const [isShow, setIsShow] = useState(type === 'password' ? false : null);

    useEffect(() => {
        return () => {
            unregister(name);
        };
    }, [unregister]);

    const  requiredMessage = "Введите " + labelText.toLowerCase();
    const  minLengthMessage = "Минимум " + minLength + (minLength %10 == 1 ? ' символ' : minLength %10 == 2 || minLength %10 == 3 || minLength %10 == 4 ? ' символа' : ' символов');
    
    const lettersAndDigitsPattern = {
        value: /^[a-zA-Zа-яА-Я0-9]+$/,
        message: 'Только буквы и цифры',
    }

    const onlyPositiveDigitsPattern = {
        value: /^[0-9.]+$/,
        message: 'Только положительные цифры',
    }

    return (
        <div className='form-field'>
                {isPhone == false &&
                <>
                    <input 
                        // defaultValue={defaultValue}
                        className={`form-field__input ${errors[name]?.message ? 'error' : ''}`}
                        type={type === 'password' && isShow ? 'text' : type }
                        id={name}
                        name={name}
                        required
                        {...register( name , {
                            pattern: onlyLettersAndDigits ? lettersAndDigitsPattern : (onlyPositiveDigits ? onlyPositiveDigitsPattern : undefined),
                            required: requiredMessage,
                            minLength:{
                                value: minLength,
                                message: minLengthMessage,
                            }
                        })}
                    />
                </>
                }
                {/* {isPhone &&
                    <InputMask 
                        className={`form-field__input ${errors[name]?.message ? 'error' : ''}`}
                        id={name}
                        mask="+ 999 (99) 999-99-99" 
                        maskChar="X" 
                        {...register( name , {
                            pattern: {
                                value: /^[^X]*$/,
                                message: 'Введите телефон',
                            },
                            required: requiredMessage,
                            minLength:{
                                value: 12,
                                message: minLengthMessage,
                            }
                        })}
                    />
                } */}
                
                
            <label className={'form-field__label'} htmlFor={name}>
                <span className={`form-field__label-text`}>
                    {labelText}
                </span>
            </label>

            {type === 'password' &&
                <button type='button' className='form-field__label-password-show-btn' onClick={() => setIsShow(!isShow) }>
                {isShow ?
                    <img
                        src='svg/Eye-slash.svg'
                        alt=''
                        width={25}
                        height={25}
                    />
                    :
                    <img
                        src='svg/Eye.svg'
                        alt=''
                        width={25}
                        height={25}
                    />
                    }
            </button>
            }

            <p className='form-field__error'>{errors[name]?.message}</p>
        </div>
    );
};

export default StyledInput;