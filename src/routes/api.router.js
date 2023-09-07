import express from "express";
const getRouter = express.Router();
import { httpGetApiData } from "../controllers/api.controller";

getRouter.get('/', httpGetApiData);

export default getRouter;