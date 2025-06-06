import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC, memo } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '../../models/theme';

import './PracticeContent.scss';
import { useAppContext } from '../AppContext/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

type Props = {
    readonly themes: readonly Theme[];
};

const PracticeContentComponent: FC<Props> = ({ themes }) => {
    const context = useAppContext();
    const navigate = useNavigate();
    const { course } = useParams();

    if (!context) {
        navigate('/login');
    }

    const tasks = context?.data.courses
        .filter(item => item.title === course?.toUpperCase())
        .flatMap(item => item.themes)
        .flatMap(item => item.tasks);

    return (
        <div className='practiceContentContainer'>
            <h2 className='practiceContentCardTitle'>
                Практические задания
            </h2>
            {
                themes?.map(theme => (
                    <Accordion key={theme.title}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon sx={{ color: '#E0E0E0' }} />}
                        >
                            {theme.title}
                        </AccordionSummary>
                        <AccordionDetails>
                            <List>
                                {
                                    tasks?.filter(item => item.themeId === theme._id)
                                        .map(item => (
                                            <ListItem key={item._id}>
                                                <ListItemButton>
                                                    <ListItemText>
                                                        {item.title}
                                                    </ListItemText>
                                                </ListItemButton>
                                            </ListItem>
                                        ))
                                }
                            </List>
                        </AccordionDetails>
                    </Accordion>
                ))
            }
        </div>
    );
};

export const PracticeContent = memo(PracticeContentComponent);
