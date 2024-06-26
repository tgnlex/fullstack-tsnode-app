import dotenv from 'dotenv';

dotenv.config()

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const TEST = process.env.NODE_ENV === 'test';
const PRODUCTION = process.env.NODE_ENV = 'production';

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT ? Number(process.env.API_PORT) : 2000;

export {DEVELOPMENT, TEST, PRODUCTION, API_HOST, API_PORT}
