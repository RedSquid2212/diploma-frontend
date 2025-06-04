import { Button } from '@mui/material';
import { FC, memo, useState } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';
import { client } from '../../services/client.service';

const LoginFormComponent: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLoginButtonClick = async () => {
        try {
            const result = await client.login({ username, password });
            console.log(result);
        } catch (error: unknown) {
            console.error(error);
        }
    };

    return (
        <form className="loginForm" >
            <input
                className='loginInput'
                placeholder="Логин"
                onChange={event => setUsername(event.target.value)}
            />
            <input
                className='loginInput'
                placeholder="Пароль"
                type="password"
                onChange={event => setPassword(event.target.value)}
            />
            <Button
                variant="contained"
                className="loginButton"
                onClick={handleLoginButtonClick}
            >
                Войти
            </Button>
            <Link to={'/registration'}>
                <Button variant="text" type="button" className="registrationLink">
                    Еще нет аккаунта? Зарегистрироваться
                </Button>
            </Link>
        </form>
    );
};

export const LoginForm = memo(LoginFormComponent);
