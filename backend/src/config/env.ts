import dotenv from 'dotenv';

dotenv.config()

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const PRODUCTION = process.env.NODE_ENV = 'production';
const TEST = process.env.NODE_ENV === 'test';

const API_HOST = process.env.API_HOST || 'localhost';
const API_PORT = process.env.API_PORT ? Number(process.env.API_PORT) : 2000;

const LOG_LEVEL = process.env.LOG_LEVEL || 'signal'

const EMAIL_ADDRESS = process.env.EMAIL_ADDRESS 
const EMAIL_PASSWORD process.env.EMAIL_PASSWORD

export {DEVELOPMENT, TEST, PRODUCTION, API_HOST, API_PORT, LOG_LEVEL}
