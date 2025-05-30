import { FC, memo } from 'react';

import styles from './RegistrationPage.module.scss';
import { RegistrationForm } from '../../components/RegistrationForm/RegistrationForm';

const RegistrationPageComponent: FC = () => {
    return (
        <div className={styles.formContainer}>
            <h1 className={styles.registrationPageHeader} >
                Регистрация
            </h1>
            <RegistrationForm />
        </div>
    );
};

export const RegistrationPage = memo(RegistrationPageComponent);
