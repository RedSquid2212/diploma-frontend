import { FC, memo } from 'react';
import { CodeEditor } from '../../components/CodeEditor/CodeEditor';

import './CodeTaskPage.scss';
import { Task } from '../../models/task';

type Props = {
    readonly task: Task;
};

const CodeTaskPageComponent: FC<Props> = ({ task }) => {
    return (
        <div className='code-task-page'>
            <section className='code-task'>
                <h1 className='code-task-title'>
                    { task.title }
                </h1>
                <hr />
                <p className='code-task-text'>
                    { task.text }
                </p>
            </section>
            <CodeEditor />
        </div>
    )
};

export const CodeTaskPage = memo(CodeTaskPageComponent);