import dotenv from 'dotenv';
dotenv.config()
// console.log('JWT_SECRET from .env:', process.env.JWT_SECRET);

import express from 'express';
import mongoose from 'mongoose';
import usersRouter from './routes/users.js';
import authRouter from './routes/auth.js';
import errorHandler from './middleware/errorHandler.js';

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json())

app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use(errorHandler)

await mongoose.connect(process.env.MONGO_URL)

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
    
})