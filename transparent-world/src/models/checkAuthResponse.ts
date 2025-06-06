export type CheckAuthResponse = {
	isAuthenticated: boolean;
	user: {
		username: string;
		iat: number;
		exp: number;
	};
};
