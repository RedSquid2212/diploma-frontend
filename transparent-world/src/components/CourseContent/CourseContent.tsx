import { FC, memo } from 'react';
import { Theme } from '../../models/theme';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './CourseContent.scss';

type Props = {
    readonly themes: readonly Theme[];
};

const CourseContentComponent: FC<Props> = ({ themes }) => {
    return (
        <div className='contentContainer'>
            <h2 className='contentCardTitle'>
                Теория по курсу
            </h2>
            {
                themes.map(theme => (
                    <Accordion key={theme.title}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{color: '#E0E0E0'}}/>}
                        >
                            { theme.title }
                        </AccordionSummary>
                        <AccordionDetails>
                            Теория по теме
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
};

export const CourseContent = memo(CourseContentComponent);
