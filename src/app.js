import express from "express";
import cors from "cors";
const app = express();
import getRouter from "./routes/api.router";


app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.status(423).json({
        message: "Kindly make use of the '/api' endpoint."
    });
});
app.use('/api', getRouter);

export default app;