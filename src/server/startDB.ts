import mongoose from 'mongoose';

const DB_URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@mangodb.3maulj5.mongodb.net/?retryWrites=true&w=majority`;

export const startDB = () => {
  mongoose.connect(DB_URL);

  mongoose.connection.once('open', () =>
    console.log('Successfuly coonected to MangoDB!'),
  );
};
