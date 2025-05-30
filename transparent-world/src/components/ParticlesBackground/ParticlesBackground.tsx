import { FC, memo } from 'react';

import './ParticlesBackground.scss';

const ParticlesBackgroundComponent: FC = () => {
    const particles = Array(100).fill(0);
    return (
        <div className="particlesContainer">
            {
                particles.map(() => <div className='particle'></div>)
            }
        </div>
    );
};

export const ParticlesBackground = memo(ParticlesBackgroundComponent);
