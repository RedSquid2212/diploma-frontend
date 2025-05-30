import { FC, memo } from 'react';
import GeometryRunner from '../../components/GeometryRunner/GeometryRunner';

const GeometryRunnerPageComponent: FC = () => {
    return (
        <>
            <GeometryRunner />
        </>
    );
};

export const GeometryRunnerPage = memo(GeometryRunnerPageComponent);
