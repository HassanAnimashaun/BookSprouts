import dotenv from 'dotenv';
import express, { Express, Request, Response } from 'express';
import cors from 'cors';
import connectDB from './config/db.js';

dotenv.config();

const app: Express = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get('/health', (req: Request, res: Response) => {
  res.status(200).json({ message: `Server is running on ${PORT}` });
});

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
};

startServer().catch((err) => {
  console.error('Failed to start server', err);
  process.exit(1);
});
