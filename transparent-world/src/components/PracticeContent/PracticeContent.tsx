import { Accordion, AccordionSummary, AccordionDetails, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { FC, memo, useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Theme } from '../../models/theme';

import './PracticeContent.scss';
import { useAppContext } from '../AppContext/AppContext';
import { useNavigate, useParams } from 'react-router-dom';
import { TestModal } from '../TestModal/TestModal';
import { Task } from '../../models/task';
import { TaskType } from '../../models/taskType.enum';

type Props = {
    readonly themes: readonly Theme[];
};

const PracticeContentComponent: FC<Props> = ({ themes }) => {
    const context = useAppContext();
    const navigate = useNavigate();
    const { course } = useParams();
    const [isOpen, setIsOpen] = useState(false);
    const [testTask, setTestTask] = useState<Task | null>(null);

    if (!context) {
        navigate('/login');
    }

    const tasks = context?.data.courses
        .filter(item => item.title === course?.toUpperCase())
        .flatMap(item => item.themes)
        .flatMap(item => item.tasks);

    const handleTaskButtonClick = (task: Task) => {
        if (task.type === TaskType.Test) {
            setTestTask(task);
            setIsOpen(true);
        } else {
            navigate(`/${course}/practice/${task._id}`);
        }
    };

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
                                        ?.map(item => (
                                            <ListItem key={item._id}>
                                                <ListItemButton onClick={() => handleTaskButtonClick(item)}>
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
            <TestModal open={isOpen} onOpen={setIsOpen} task={testTask} />
        </div>
    );
};

export const PracticeContent = memo(PracticeContentComponent);
