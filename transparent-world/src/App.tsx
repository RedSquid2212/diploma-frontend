import { FC, memo } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAppContext } from './components/AppContext/AppContext';

const AppComponent: FC = () => {
    const navigate = useNavigate();
    const context = useAppContext();

    if (!context?.data.isAuthorized) {
        navigate('/login');
    }
    
    return (
        <>
            <Outlet />
        </>
    );
};

export const App = memo(AppComponent);
