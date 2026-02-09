import jwt, {
  type JwtPayload,
  type Secret,
  type SignOptions,
} from 'jsonwebtoken';
import { env } from '../config/env.js';

const jwtSecret: Secret = env.JWT_SECRET; // keep as string
const jwtExpires: SignOptions['expiresIn'] =
  env.JWT_EXPIRES_IN as SignOptions['expiresIn'];

export type TokenPayload = {
  userId: string;
  role: 'parent' | 'child';
};

export function signToken(payload: TokenPayload): string {
  return jwt.sign(payload, jwtSecret, { expiresIn: jwtExpires });
}

export function verifyUserToken(token: string): TokenPayload & JwtPayload {
  return jwt.verify(token, jwtSecret) as TokenPayload & JwtPayload;
}
