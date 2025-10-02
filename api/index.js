import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import router from './Router/router.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT;
app.use(express.json({extended:true, limit:'50mb'}));
app.use(cors());
app.use('/api', router);


mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
