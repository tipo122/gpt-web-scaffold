/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import { Configuration, OpenAIApi } from 'openai';

// import * as logger from 'firebase-functions/logger';
const configuration = new Configuration({
  apiKey: '',
});

const openai = new OpenAIApi(configuration);

exports.oncreatechatcompletion = onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Headers', '*');
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST');

  try {
    const result = await openai.createChatCompletion(req.body?.data);

    res.json({ data: result.data });
  } catch (e) {
    console.error(e);
    res.json({ result: e });
  }
});
