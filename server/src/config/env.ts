import dotenv from 'dotenv';

dotenv.config();

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing environment variable: ${name}`);
  return value;
}

function requireNumber(name: string): number {
  const raw = requireEnv(name);
  const num = Number(raw);
  if (Number.isNaN(num))
    throw new Error(`Environment variable ${name} must be a number`);
  return num;
}

export const env = Object.freeze({
  PORT: requireNumber('PORT'),
  NODE_ENV: requireEnv('NODE_ENV'),

  MONGODB_URI: requireEnv('MONGODB_URI'),

  JWT_SECRET: requireEnv('JWT_SECRET'),
  JWT_EXPIRES_IN: requireEnv('JWT_EXPIRES_IN'),

  CLIENT_ORIGIN: requireEnv('CLIENT_ORIGIN'),
});

export type Env = typeof env;
