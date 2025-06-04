import { Box } from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { FC, memo, useState } from 'react';

import './Leaderboard.scss';
import { LeaderboardControls } from '../LeaderboardControls/LeaderboardControls';

const columns: GridColDef<(typeof rows)[number]>[] = [
    { field: 'id', headerName: 'Place', width: 90 },
    {
        field: 'username',
        headerName: 'Username',
        width: 150,
    },
    {
        field: 'xp',
        headerName: 'XP',
        type: 'number',
        width: 110,
    },
];

const rows = [
    { id: 1, username: 'Snow', xp: 14 },
    { id: 2, username: 'Lannister', xp: 31 },
    { id: 3, username: 'Lannister', xp: 31 },
    { id: 4, username: 'Stark', xp: 11 },
    { id: 5, username: 'Targaryen', xp: 56 },
    { id: 6, username: 'Melisandre', xp: 150 },
    { id: 7, username: 'Clifford', xp: 44 },
    { id: 8, username: 'Frances', xp: 36 },
    { id: 9, username: 'Roxie', xp: 65 },
];

const LeaderboardComponent: FC = () => {
    const [leaderboardType, setLeaderboardType] = useState<string>('general');
    return (
        <>
            <Box>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 25,
                            },
                        },
                    }}
                    pageSizeOptions={[25]}
                    disableRowSelectionOnClick
                    sx={{
                        width: 'fit-content',
                        backgroundColor: '#1E1E1E',
                        color: '#E0E0E0',
                    }}
                />
            </Box>
            <LeaderboardControls value={leaderboardType} onValueChange={setLeaderboardType} />
        </>
    )
};

export const Leaderboard = memo(LeaderboardComponent);
