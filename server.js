import { handler } from './build/handler.js';
import express from 'express';
import path from 'path';
import config from './src/config.json' assert {type: "json"};

import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.static(path.join(__dirname, './public')));

app.use(handler);

app.listen(config.PORT, () => {
  console.log(`listening on port ${config.PORT}`);
});