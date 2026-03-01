import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    if (!mongoURI) {
      throw new Error('MONGODB_URI is not defined in environment variable ');
    }
    await mongoose.connect(mongoURI);
    console.log('✅ Connection successful');
  } catch (error) {
    console.error('❌ Connection error', error);
    process.exit(1);
  }
};

export default connectDB;
