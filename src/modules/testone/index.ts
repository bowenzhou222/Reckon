import * as express from 'express';
import * as controller from './controller';

const TestOne = express();

TestOne.get('/', controller.divide);

export { TestOne };
