import { TaskType } from './taskType.enum';

type Test = {
    input: readonly unknown[];
    expected: unknown;
}

export type Task = {
    readonly _id: string;
    readonly themeId: string;
    readonly xp: number;
    readonly title: string;
    readonly type: TaskType;
    readonly text: string;
    readonly placeholderCode?: string;
    readonly tests: readonly Test[];
    readonly variants?: readonly string[];
};
