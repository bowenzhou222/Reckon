import * as express from 'express';
import { appMiddlewares } from './middleware';
import { start } from './utils/start';
import { router } from './routes';

export const app = express();

app.use(appMiddlewares);

app.use(router);

start(app);
