import { LoginDto } from '../dto/login.dto';
import { RegisterDto } from '../dto/register.dto';
import { UpdateGameRecordDto } from '../dto/updateGameRecord.dto';
import { UpdateThemeProgressDto } from '../dto/updateThemeProgress.dto';

class Client {
    constructor(private readonly backendUrl: string) {}

    public async login(dto: LoginDto) {
        try {
            const response = await fetch(`${this.backendUrl}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(dto),
            });
            const user = await response.json();
            return user;
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public async register(dto: RegisterDto) {
        const { username, password } = dto;
        try {
            const response = await fetch(`${this.backendUrl}/auth/register`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ username, password }),
            });
            const user = await response.json();
            return user;
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public async getUserCourses(userId: string) {
        try {
            const response = await fetch(`${this.backendUrl}/progress/${userId}`, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            const courses = await response.json();
            console.log(courses);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public async updateThemeProgress(dto: UpdateThemeProgressDto) {
        const { userId, ...data } = dto;
        try {
            const response = await fetch(`${this.backendUrl}/progress/${userId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify(data),
            });
            const updatedCourses = await response.json();
            return updatedCourses;
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public async updateGameRecord(dto: UpdateGameRecordDto) {
        const { userId, newGameXp } = dto;
        try {
            const response = await fetch(`${this.backendUrl}/progress/${userId}/game`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ gameXp: newGameXp }),
            });
            const updatedCourses = await response.json();
            console.log(updatedCourses);
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public async getLeaderboard() {
        try {
            const response = await fetch(`${this.backendUrl}/leaderboard`, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            const leaderboard = await response.json();
            return leaderboard;
        } catch (error: unknown) {
            console.error(error);
        }
    }

    public async getGameLeaderboard() {
        try {
            const response = await fetch(`${this.backendUrl}/leaderboard/game`, {
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
            });
            const leaderboard = await response.json();
            return leaderboard;
        } catch (error: unknown) {
            console.error(error);
        }
    }
}

export const client = new Client('http://localhost:3000');
