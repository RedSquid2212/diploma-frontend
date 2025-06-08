import { Button, Dialog, DialogTitle, FormControl, FormControlLabel, Radio, RadioGroup } from '@mui/material';
import { FC, memo } from 'react';

import './TestModal.scss';
import { Task } from '../../models/task';

type Props = {
    readonly open: boolean;
    readonly onOpen: (isOpen: boolean) => void;
    readonly task: Task | null;
};

const TestModalComponent: FC<Props> = ({ open, onOpen, task }) => {
    const handleClose = () => {
        onOpen(false);
    };

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
