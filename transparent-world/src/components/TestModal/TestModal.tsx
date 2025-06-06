import { Button, Dialog, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FC, memo } from 'react';

import './TestModal.scss';
import { useAppContext } from '../AppContext/AppContext';
import { useParams } from 'react-router-dom';

type Props = {
    readonly open: boolean;
    readonly onOpen: (isOpen: boolean) => void;
};

const TestModalComponent: FC<Props> = ({ open, onOpen }) => {
    const context = useAppContext();
    const { course, taskId } = useParams();

    const handleClose = () => {
        onOpen(false);
    };

    const task = context?.data.courses
        .filter(item => {
            if (course) {
                return item.title === course.toUpperCase();
            }
            return true;
        })
        .flatMap(item => item.themes)
        .flatMap(item => item.tasks)
        .find(item => item._id === taskId);

    return (
        <Dialog open={open} className='testDialog' onClose={handleClose}>
            <DialogTitle>
                {task?.title}
            </DialogTitle>
            <p>{task?.text}</p>
            <FormControl>
                <RadioGroup
                    name="controlled-radio-buttons-group"
                >
                    {
                        task?.variants?.map((variant, index) => (
                            <FormControlLabel
                                value={variant}
                                control={<Radio />}
                                label={variant}
                                key={index}
                            />
                        ))
                    }
                </RadioGroup>
                <Button type="button" variant="contained">
                    Отправить
                </Button>
            </FormControl>
        </Dialog>
    )
};

export const TestModal = memo(TestModalComponent);
