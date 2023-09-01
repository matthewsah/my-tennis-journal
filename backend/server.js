import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js'
import journalLogsRouter from './routes/journalLogs.js'

dotenv.config(); // allows us to hold environment variables in .env folder

// const app: Application = express();
const app = express();
const port = process.env.PORT || 5001;

app.use(cors()); // middleware
app.use(express.json()); // allows us to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;

try {
  connection.once('open', () => {
    console.log("Established connection to MongoDb")
  })
} catch (e) {
  console.error(e);
}

app.use('/users', usersRouter);
app.use('/journallogs', journalLogsRouter);

// starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
