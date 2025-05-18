import { FC, memo } from 'react';
import { CircleButton } from '../../components/CircleButton/CircleButton';

const CoursesPageComponent: FC = () => {
    return (
        <div>
            <p style={{color: 'white'}}>&#8592;</p>
            <CircleButton
                text='HTML'
                width={250}
                height={250}
                position={{
                    top: '150px',
                    left: '25%',
                }}
                animated={false}
                backgroundColor='#FF10F0'
            />
            <CircleButton
                text='JS'
                width={250}
                height={250}
                position={{
                    top: '100px',
                    right: '30%',
                }}
                animated={false}
                backgroundColor='#00F5D4'
            />
            <CircleButton
                text='CSS'
                width={250}
                height={250}
                position={{
                    bottom: '100px',
                    left: 'calc(50% - 125px)',
                }}
                animated={false}
                backgroundColor='#6200EE'
            />
        </div>
    )
};

export const CoursesPage = memo(CoursesPageComponent);
