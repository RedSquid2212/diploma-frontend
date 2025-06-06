import { Course } from '../../models/course';
import { User } from '../../models/user';

export type ContextData = {
    readonly isAuthorized: boolean;
    readonly user: User | null;
    readonly courses: readonly Course[];
}