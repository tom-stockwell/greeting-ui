const prefix = 'REACT_APP_';

declare global {
	interface Window { env: {
		[x: string]: string
	}; }
}

function  env(key: string): string | undefined {
	const searchKey = prefix + key;
	return process?.env[searchKey] ?? window?.env?.[searchKey];
}

export const API_URL: string = env('API_URL') ?? 'http://localhost:8080';
