import { Box } from '@mui/material';
import { DataGrid, GridColDef, GridValidRowModel } from '@mui/x-data-grid';
import { FC, memo, useEffect, useState } from 'react';

import './Leaderboard.scss';
import { LeaderboardControls } from '../LeaderboardControls/LeaderboardControls';
import { client } from '../../services/client.service';
import { LeaderboardRow } from '../../models/leaderboardRow';
import { GameLeaderboardRow } from '../../models/gameLeaderboardRow';

const LeaderboardComponent: FC = () => {
    const [leaderboardType, setLeaderboardType] = useState<string>('general');
    const [rows, setRows] = useState<readonly GridValidRowModel[]>([]);

    const standardColumns: GridColDef[] = [
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

    const gameColumns: GridColDef[] = [
        { field: 'id', headerName: 'Place', width: 90 },
        {
            field: 'username',
            headerName: 'Username',
            width: 150,
        },
        {
            field: 'gameXp',
            headerName: 'XP',
            type: 'number',
            width: 110,
        },
    ];
    useEffect(() => {
        const getLeaderboard = async () => {
            const result = await client.getLeaderboard() as LeaderboardRow[];
            setRows(result.map((item, index) => ({
                ...item,
                id: index + 1,
            })));
        };

        const getGameLeaderboard = async () => {
            const result = await client.getGameLeaderboard() as GameLeaderboardRow[];
            setRows(result.map((item, index) => ({
                ...item,
                id: index + 1,
            })));
        };

        if (leaderboardType === 'general') {
            getLeaderboard();
        } else {
            getGameLeaderboard();
        }
    }, [leaderboardType]);

    return (
        <>
            <Box>
                <DataGrid
                    rows={rows}
                    columns={leaderboardType === 'general' ? standardColumns : gameColumns}
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
