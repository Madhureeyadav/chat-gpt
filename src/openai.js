/*const { Configuration, OpenAIApi } = require('openai');

//import {Configuration,OpenAIApi} from 'openai';

const config = new Configuration({ apiKey : "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" });
const openai = new OpenAIApi(config);

export async function sendMsgToOpenAI(message){
    const res= await openai.createCompletion({
        model:'text-davinci-003',
        prompt:message,
        temperature:0.7,
        max_tokens:256,
        top_P:1,
        frequency_penalty:0,
        presense_penalty:0

    });
    return res.data.choices[0].text;
}*/
import React, { useEffect, useState } from 'react';
import { Configuration, OpenAIApi } from '.openai';
import { sendMsgToOpenAI} from './openai';

const apiKey = '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';
const openai = new OpenAIApi(new Configuration({ apiKey }));

function OpenAIComponent() {
  const [response, setResponse] = useState('');

   async function sendMsgToOpenAI(message) {
    try {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        temperature: 0.7,
        max_tokens: 256,
        top_P: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });

      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error('Error sending message to OpenAI:', error);
    }
  }

  useEffect(() => {
    // Example usage
    sendMsgToOpenAI('Hello, OpenAI!').then((result) => {
      console.log('OpenAI Response:', result);
    });
  }, []);

  return (
    <div>
      <h1>OpenAI Response:</h1>
      <p>{response}</p>
    </div>
  );
}

export default OpenAIComponent;
