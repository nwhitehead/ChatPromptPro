import * as dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import express_ws from 'express-ws';

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
express_ws(app);

// Async iterator from chunk to lines
async function* chunksToLines(chunksAsync) {
    let previous = "";
    for await (const chunk of chunksAsync) {
        const bufferChunk = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        previous += bufferChunk;
        let eolIndex;
        while ((eolIndex = previous.indexOf("\n")) >= 0) {
            // line includes the EOL
            const line = previous.slice(0, eolIndex + 1).trimEnd();
            if (line === "data: [DONE]") break;
            if (line.startsWith("data: ")) yield line;
            previous = previous.slice(eolIndex + 1);
        }
    }
}

// Async iterator from lines to messages (for web streaming)
async function* linesToMessages(linesAsync) {
    for await (const line of linesAsync) {
        const message = line.substring("data :".length);
        yield message;
    }
}

async function* streamCompletion(data) {
    yield* linesToMessages(chunksToLines(data));
}

app.ws("/api/v1/echo", async (ws, req) => {
    ws.on("message", async (msg) => {
        ws.send(msg + " back at ya");
    });
});

app.ws("/api/v1/wschat", async (ws, req) => {
    ws.on("message", async (msg) => {
        try {
            const req = JSON.parse(msg);
            if (req.tag === "stop") {
                console.log("stop generating received");
            }
            if (req.tag === "chat") {
                console.log("start chat generation");
                const response = {
                    tag: 'reply',
                    data: 'howdy dooty ' + req.data,
                };
                await new Promise(r => setTimeout(r, 2000));
                ws.send(JSON.stringify(response));
            }
        } catch(error) {
            console.log("Could not parse JSON request on /api/v1/wschat");
        }
    });
});


app.get("/api/v1/chat", async (req, res) => {
    const response = await openai.createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [{role: "system", content:"You are a helpful cheerful assistant."}, {role: "user", content: "Which is taller, an ant or a dog?"}],
        temperature: 1.7,
        max_tokens: 20,
        stream: true,
    }, {
        responseType: "stream",
    });

    for await (const message of streamCompletion(response.data)) {
        try {
            const parsed = JSON.parse(message);
            console.log(parsed);
            const delta = parsed.choices[0].delta;
            if (delta.content) {
                const text = delta.content;
                console.log(text);
            }
        } catch (error) {
            console.error("Could not JSON parse stream message", message, error);
        }
    }
    console.log('\n');
    
    res.json({
        msg: 'This is an API response!',
        from: 'Backend',
    });

});

const { PORT = 5000 } = process.env;

app.listen(PORT, () => {
  console.log();
  console.log(`  > Backend local: \x1b[36mhttp://localhost:\x1b[1m${PORT}/\x1b[0m`);
});
