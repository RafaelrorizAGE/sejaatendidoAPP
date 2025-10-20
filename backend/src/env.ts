import 'dotenv/config';
export const ENV = { PORTA: Number(process.env.PORTA||3001), JWT_SEGREDO: process.env.JWT_SEGREDO || 'dev', STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || '' };
