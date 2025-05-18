import { FC, memo } from 'react';
import { CircleButton } from '../../components/CircleButton/CircleButton';
import { Button } from '@mui/material';
import './CoursesPage.scss';
import { Link } from 'react-router-dom';

const CoursesPageComponent: FC = () => {
    return (
        <div>
            <Link to={'/'}>
                <Button type='button' className='MuiButtonBase-root back-button'>
                    &#8592;
                </Button>
            </Link>
            <div className='container1'>
                <div style={{
                    width: 400,
                    height: 400,
                    border: '2px solid #FF10F0',
                    borderRadius: '50%',
                    position: 'absolute',
                    pointerEvents: 'none',
                }}/>
                <CircleButton
                    text='HTML'
                    width={250}
                    height={250}
                    position={{}}
                    positionType='static'
                    animated={false}
                    backgroundColor='#FF10F0'
                />
            </div>
            <div className='container2'>
                <div style={{
                    width: 400,
                    height: 400,
                    border: '2px solid #00F5D4',
                    borderRadius: '50%',
                    position: 'absolute',
                    pointerEvents: 'none',
                }}/>
                <CircleButton
                    text='JS'
                    width={250}
                    height={250}
                    position={{}}
                    positionType='static'
                    animated={false}
                    backgroundColor='#00F5D4'
                />
            </div>
            <div className='container3'>
                <div style={{
                    width: 400,
                    height: 400,
                    border: '2px solid #6200EE',
                    borderRadius: '50%',
                    position: 'absolute',
                    pointerEvents: 'none',
                }}/>
                <CircleButton
                    text='CSS'
                    width={250}
                    height={250}
                    position={{}}
                    positionType='static'
                    animated={false}
                    backgroundColor='#6200EE'
                />
            </div>
        </div>
    )
};

export const CoursesPage = memo(CoursesPageComponent);
