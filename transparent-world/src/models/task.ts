import { TaskType } from './taskType.enum';

export type Task = {
    readonly _id: string;
    readonly themeId: string;
    readonly xp: number;
    readonly title: string;
    readonly type: TaskType;
    readonly text: string;
    readonly placeholderCode?: string;
    readonly tests: readonly string[];
    readonly variants?: readonly string[];
};
