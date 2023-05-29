import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';

import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.get("/api/v1", async (req, res) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "user", content: "What is x * y if x is 5 and y is 3?"}],
        temperature: 0,
        max_tokens: 7,
    });
    const reply = response.data.choices[0].message.content;
    res.json({
        msg: 'This is an API response!',
        from: 'Backend',
        reply,
    });
});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  > Backend local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
