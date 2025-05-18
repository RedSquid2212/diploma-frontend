import { FC, memo } from 'react';
import './StartPage.scss';
import { Link } from 'react-router-dom';
import { CircleButton } from '../../components/CircleButton/CircleButton';

const StartPageComponent: FC = () => {
    return (
        <div className='start-page'>
            <h1 className='heading'>
                Into atoms
            </h1>
            <CircleButton
                text='войти'
                width={150}
                height={150}
                backgroundColor='#00F5D4'
                position={{
                    left: '25%',
                    top: '300px',
                }}
                positionType='absolute'
                animated={false}
            />
            <CircleButton
                text='продолжить игру'
                width={250}
                height={250}
                backgroundColor='#6200EE'
                position={{
                    top: '200px',
                    right: '20%',
                }}
                positionType='absolute'
                animated={false}
            />
            <Link to={'/courses'}>
                <CircleButton
                    text='начать'
                    width={300}
                    height={300}
                    backgroundColor='#FF10F0'
                    position={{
                        bottom: '60px',
                        left: 'calc(50% - 150px)',
                    }}
                    positionType='absolute'
                    animated={true}
                />
            </Link>
        </div>
    );
};

export const StartPage = memo(StartPageComponent);