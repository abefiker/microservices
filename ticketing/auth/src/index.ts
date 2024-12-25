import mongoose from 'mongoose';
import { app } from './app';
const start = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY environment variable is missing');
  }
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017');
    console.log('database connected');
  } catch (err) {
    console.log(`Error: ${err}`);
  }
  app.listen(3030, () => {
    console.log('Auth service running on port 3030');
  });
};
start();
