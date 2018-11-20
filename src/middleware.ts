import * as cors from 'cors';
import * as helmet from 'helmet';
import * as bodyParser from 'body-parser';
import * as expressValidator from 'express-validator';
import { RequestHandler } from 'express';

export const appMiddlewares: Array<RequestHandler> = [
  cors(),
  helmet(),
  bodyParser.urlencoded({ extended: true }),
  bodyParser.json(),
  expressValidator(),
];
