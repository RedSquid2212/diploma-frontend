export type User = {
    readonly _id: string;
    readonly xp: number;
    readonly gameXp: number;
    readonly achievements: readonly string[];
    readonly username: string;
};
