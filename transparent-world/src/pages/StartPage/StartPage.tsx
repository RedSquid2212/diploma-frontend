import { FC, memo } from 'react';
import './StartPage.scss';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const StartPageComponent: FC = () => {
    return (
        <>
            <h1 className='heading'>
                Into atoms
            </h1>
            <Link to={'/courses'}>
                <Button
                    className='MuiButtonBase-root start-button'
                    type='button'
                >
                    Начать
                </Button>
            </Link>
        </>
    );
};

export const StartPage = memo(StartPageComponent);