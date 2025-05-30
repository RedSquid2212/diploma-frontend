import { Button } from '@mui/material';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';
import './LoginForm.scss';

const LoginFormComponent: FC = () => {
    return (
        <form className="loginForm" >
            <input className='loginInput' placeholder="Логин" />
            <input className='loginInput' placeholder="Пароль" />
            <Button variant="contained" className="loginButton">
                Войти
            </Button>
            <Link to={'/register'}>
                <Button variant="text" type="button" className="registrationLink">
                    Еще нет аккаунта? Зарегистрироваться
                </Button>
            </Link>
        </form>
    );
};

export const LoginForm = memo(LoginFormComponent);
