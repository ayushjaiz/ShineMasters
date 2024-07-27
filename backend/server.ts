import express from "express";
import { authRoutes, workerRoutes } from "./routes";
import dotenv from "dotenv"

// import { connectToDB, createUserTable } from "./config/dbConfig";
import cors from 'cors'

dotenv.config({ path: `${process.cwd()}/.env` });
const app = express();

const port = process.env.APP_PORT || 4000;

app.use(express.urlencoded({ extended: true }));

// Creates user table
// createUserTable();

app.use(express.json());

// cors policy
const corsConfig = {
    credentials: true,
    origin: true,
};
app.use(cors(corsConfig));

app.get('/', (req, res) => {
    res.send('Response from server');
})

app.use('/api/auth', authRoutes);
app.use('/api/worker', workerRoutes);
// app.use('/api/booking', bookingRoutes);

// Run server and connect to database
app.listen(port, async () => {
    console.log(`Server running at localhost:${port}`)
    // try {
    //     await connectToDB();
    // } catch (e) {
    //     console.log(e);
    // }
});