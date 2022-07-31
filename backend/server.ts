import express, {Application} from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import mongoose from 'mongoose';
import usersRouter from './routes/users'
import journalLogsRouter from './routes/journalLogs'

dotenv.config(); // allows us to hold environment variables in .env folder

const app: Application = express();
const port = process.env.PORT || 5000;

app.use(cors()); // middleware
app.use(express.json()); // allows us to parse json

const uri = process.env.ATLAS_URI;
mongoose.connect(uri as string);
const connection = mongoose.connection;

connection.once('open', () => {
  console.log("Established connection to MongoDb")
})

app.use('/users', usersRouter);
app.use('/journallogs', journalLogsRouter);

// starts the server
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`)
})
