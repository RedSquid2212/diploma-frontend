import { Button } from '@mui/material';
import { FC, memo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.scss';
import { client } from '../../services/client.service';
import { User } from '../../models/user';

const LoginFormComponent: FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLoginButtonClick = async () => {
        try {
            await client.login({ username, password }) as User;
            setTimeout(() => {
                navigate('/');
            }, 300);
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
