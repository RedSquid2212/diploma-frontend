import { TaskType } from './taskType.enum';

export type Task = {
    readonly type: TaskType;
    readonly text: string;
    readonly variants?: readonly string[] | Record<string, string>;
};
