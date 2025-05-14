import { FC, memo } from 'react';
import './StartPage.scss';
import { Link } from 'react-router-dom';

const StartPageComponent: FC = () => {
    return (
        <>
            <h1 className='heading'>Into atoms</h1>
            <Link to={'/courses'}>
                <button className='start-button'>Начать</button>
            </Link>
        </>
    );
};

export const StartPage = memo(StartPageComponent);