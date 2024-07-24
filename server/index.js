import express from "express"
import bodyParser from "body-parser"
import cors from "cors"
import dotenv from "dotenv"
import helmet from "helmet"
import morgan from "morgan"
import OpenAI from 'openai'
import openAIRoutes from "./routes/openai.js"
dotenv.config();
const app=express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))
app.use(morgan("common"));
app.use(bodyParser.json({limit:"30mb",extended:"true"}))
app.use(cors());
//open ai confirguation 

 export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
     // This is the default and can be omitted
  });
  console.log("api key is ",process.env.OPENAI_API_KEY);
  //routes
  app.use('/openai',openAIRoutes)
  
const PORT=process.env.PORT||9000;
app.listen(PORT,()=>{
    console.log(`we are listining at http://localhost:${PORT}`)
})