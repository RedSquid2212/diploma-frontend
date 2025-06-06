import { Theme } from './theme';

export type Course = {
    readonly userId: string;
    readonly title: string;
    readonly progress: number;
    readonly description: string;
    readonly themes: readonly Theme[];
    readonly _id: string;
};

