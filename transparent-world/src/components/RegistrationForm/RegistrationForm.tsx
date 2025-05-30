import { Button } from '@mui/material';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import './RegistrationForm.scss';

const RegistrationFormComponent: FC = () => {
    return (
        <form className='registrationForm' >
            <input className='registrationInput' placeholder="Логин" />
            <input
                className='registrationInput'
                placeholder="Пароль"
                type="password"
            />
            <input
                className='registrationInput'
                placeholder="Подтверждение пароля"
                type="password"
            />
            <Button variant="contained" className="registrationButton">
                Войти
            </Button>
            <Link to={'/login'}>
                <Button variant="text" type="button" className="loginLink">
                    Уже есть аккаунт? Войти
                </Button>
            </Link>
        </form>
    );
};

export const RegistrationForm = memo(RegistrationFormComponent);
