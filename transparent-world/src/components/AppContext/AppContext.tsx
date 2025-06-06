import { createContext, Dispatch, FC, memo, ReactNode, SetStateAction, useContext, useEffect, useState } from 'react';
import { ContextData } from './contextData';
import { client } from '../../services/client.service';
import { CheckAuthResponse } from '../../models/checkAuthResponse';
import { User } from '../../models/user';
import { Course } from '../../models/course';

type Store = {
    readonly data: ContextData;
    readonly updater: Dispatch<SetStateAction<ContextData>>;
};

const AppContext = createContext<Store | null>(null);

type Props = {
    readonly children: ReactNode;
};

const AppContextProviderComponent: FC<Props> = ({ children }) => {
    const [state, setState] = useState<ContextData>({
        user: null,
        isAuthorized: false,
        courses: [],
    });

    useEffect(() => {
        const fetchAuthData = async () => {
            try {
                const authCheck = await client.checkAuth() as CheckAuthResponse;

                if (authCheck.isAuthenticated) {
                    const user = await client.getCurrentUser(authCheck?.user?.username ?? '') as User;
                    const coursesData = await client.getUserCourses(user?._id ?? '') as Course[];

                    setState({
                        isAuthorized: authCheck.isAuthenticated,
                        courses: coursesData,
                        user,
                    });
                } else {
                    setState({
                        user: null,
                        courses: [],
                        isAuthorized: false,
                    });
                }
            } catch (error) {
                console.error(error);
            }
        };

        fetchAuthData();
    }, []);

    return (
        <AppContext.Provider value={{ data: state, updater: setState }}>
            {children}
        </AppContext.Provider>
    );
};

export const AppContextProvider = memo(AppContextProviderComponent);

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
    return useContext(AppContext);
};
