import { Task } from './task';
import { Theory } from './theory';

export type Theme = {
    readonly name: string;
    readonly label: string;
    readonly theory: readonly Theory[];
    readonly practice: readonly Task[];
};
