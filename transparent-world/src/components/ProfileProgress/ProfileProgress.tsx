import { Box, CircularProgress, Typography } from '@mui/material';
import { FC, memo } from 'react';

type Props = {
    readonly courseColor: string;
    readonly courseProgress: number;
};

const ProfileProgressComponent: FC<Props> = ({ courseColor, courseProgress }) => {
    return (
        <Box sx={{ position: 'relative', display: 'inline-flex' }}>
            <CircularProgress
                variant="determinate"
                value={courseProgress}
                sx={{color: courseColor}}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography
                    variant="caption"
                    component="div"
                    sx={{ color: 'white', fontFamily: 'Manrope, system-ui' }}
                >
                    {`${Math.round(courseProgress)}%`}
                </Typography>
            </Box>
        </Box>
    );
};

export const ProfileProgress = memo(ProfileProgressComponent);
