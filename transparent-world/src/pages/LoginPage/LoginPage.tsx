import { FC, memo } from 'react';
import { LoginForm } from '../../components/LoginForm/LoginForm';

import styles from './LoginPage.module.scss';

const LoginPageComponent: FC = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.loginPageHeader} >
                Вход
            </h1>
            <LoginForm />
        </div>
    );
};

export const LoginPage = memo(LoginPageComponent);
