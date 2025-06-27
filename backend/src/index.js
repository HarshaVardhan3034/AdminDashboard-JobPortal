import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './utils/db.js';
import routes from './routes/jobs.routes.js'
dotenv.config();
const app = express();
const PORT = process.env.PORT;
const corsOptions = {
  origin: 'https://admindashboard-jobportal-1.onrender.com/',
  credentials: true, // if you're using cookies or auth headers
};
app.use(cors(corsOptions));
app.use(express.json());
app.use("/api",routes);

app.listen(PORT,()=>{
    console.log(`Server running on PORT ${PORT}`);
    connectDB();
});
