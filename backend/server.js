const express = require("express");


const mongoose =  require('mongoose');

const cors = require("cors");

require('dotenv').config();
const bodyParser = require("body-parser");

const connectDB = require( './Mongodb/models/connect.js');

const { Configuration, OpenAIApi } = require("openai");

const config = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(config);

// Setup server

const app = express();
app.use(bodyParser.json());
app.use(cors());

// endpoint for ChatGPT

app.post("/chat", async (req, res) => {
  const { prompt } = req.body;

  const completion = await openai.createCompletion({
    model: "text-davinci-003",
    max_tokens: 512,
    temperature: 0,
    prompt: prompt,
  });
  res.send(completion.data.choices[0].text);
});

const PORT = 8080;

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, () => console.log('Server started on port 8080'));
  } catch (error) {
    console.log(error);
  }
};

startServer();
