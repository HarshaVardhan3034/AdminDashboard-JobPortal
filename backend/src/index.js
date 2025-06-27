import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './utils/db.js';
import routes from './routes/jobs.routes.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api",routes);

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
    connectDB();
});