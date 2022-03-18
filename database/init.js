import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

export const connectMongoDb = async () => {
    try {
      await mongoose.connect(process.env.MONGODB_CONNECTION_STRING, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('MongoDb connection success.');
    } catch(e) {
      console.error('MongoDb connection failed.');
  }
};