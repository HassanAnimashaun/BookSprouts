import mongoose from 'mongoose';
import { env } from './env.js';

const uri = env.MONGODB_URI;

export async function connectDB(): Promise<void> {
  try {
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed', err);
    process.exit(1);
  }
}
