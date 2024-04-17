import dotenv from 'dotenv';

dotenv.config();

const API_KEY = process.env.ED_API_KEY ?? '';
const COURSE_ID = Number(process.env.COURSE_ID || '');

const BASE_URL = 'https://us.edstem.org/api/'
const WS_URL = 'wss://us.edstem.org/api/stream'

if (!process.env.ED_API_KEY) {
    throw new Error('ED_API_KEY not found in environment variables');
}

if (!process.env.COURSE_ID) {
    throw new Error('COURSE_ID not found in environment variables');
}

export { API_KEY, BASE_URL, WS_URL, COURSE_ID };
