import { Task } from './task';

export type Theme = {
    readonly courseId: string;
    readonly _id: string;
    readonly title: string;
    readonly progress: number;
    readonly tasks: readonly Task[];
};
