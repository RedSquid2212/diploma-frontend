import { Button } from '@mui/material';
import { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';

import './RegistrationForm.scss';
import { client } from '../../services/client.service';

const RegistrationFormComponent: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordAgain, setPasswordAgain] = useState('');

    const handleRegisterButtonClick = async () => {
        try {
            const result = await client.register({ username, password, passwordAgain });
            console.log(result);
        } catch (error: unknown) {
            console.error(error);
        }
    };
    return (
        <form className='registrationForm' >
            <input
                className='registrationInput'
                placeholder="Логин"
                onChange={event => setUsername(event.target.value)}
            />
            <input
                className='registrationInput'
                placeholder="Пароль"
                type="password"
                onChange={event => setPassword(event.target.value)}
            />
            <input
                className='registrationInput'
                placeholder="Подтверждение пароля"
                type="password"
                onChange={event => setPasswordAgain(event.target.value)}
            />
            <Button
                variant="contained"
                className="registrationButton"
                onClick={handleRegisterButtonClick}
            >
                Зарегистрироваться
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
