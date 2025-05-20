import { TaskType } from './taskType.enum';

export type Task = {
    readonly title: string;
    readonly type: TaskType;
    readonly text: string;
    readonly variants?: readonly string[] | Record<string, string>;
};
