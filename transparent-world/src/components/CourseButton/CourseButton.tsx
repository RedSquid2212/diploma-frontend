import { Button } from '@mui/material';
import { FC, memo } from 'react';
import { Link } from 'react-router-dom';

import './CourseButton.scss';

type Props = {
    readonly courseColor: string;
    readonly navigateTo: string;
    readonly label: string;
};

const CourseButtonComponent: FC<Props> = ({ courseColor, navigateTo, label }) => {
    return (
        <Link to={navigateTo}>
            <Button
                type="button"
                variant="contained"
                className='courseButton'
                sx={{ backgroundColor: courseColor }}
            >
                { label }
            </Button>
        </Link>
    );
};

export const CourseButton = memo(CourseButtonComponent);
