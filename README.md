# ChatPrompt PRO

This is the open-source project code for [ChatPrompt PRO](https://chatprompt.pro).

## Features

* Online AI chat tool
* Uses ChatGPT-3.5 or 4
* Non-linear branching and tree structure
* Template fill-in
* Auto node naming
* Auto evaluation, summarization
* Auto task suggestions
* Integration with Mechanical Turk for human evaluation

## Protocol

Vue app - JavaScript wants to call OpenAI ChatGPT API to do response to a set of messages. Connects to websocket
endpoint in backend Express server. Server talks to OpenAI endpoint and keeps track of streamed HTTP response.
Replies with multiple ws messages back to Vue client. All communication of messages on ws is with JSON strings.

Requests:
    - tag: chat | stop
    - id: unique identifier for request (to distinguish from other simultaneous reqs on same ws address)
    - data: stuff that OpenAI accepts (e.g. model, messages, temperature, etc.) stream must be true

Responses:
    - tag: update | done
    - id: unique identifier from request
    - data: current piece of text generated (one token I think) | reason for being done (error | length | ...)

## Some References

Microsoft Guidance
https://github.com/microsoft/guidance
Handlebars style, Python

LMQL
https://lmql.ai/

Clownfish
https://github.com/newhouseb/clownfish
Force it to generate JSON

Rellm
https://github.com/r2d4/rellm
Use regular expressions to constrain output

Constrained Text Generation Studio
https://github.com/hellisotherpeople/constrained-text-generation-studio
Must have certain letters, strings, etc.
