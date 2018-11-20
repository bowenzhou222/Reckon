import * as express from 'express';
import * as controller from './controller';

const TestTwo = express();

TestTwo.get('/testtwo', controller.search);

export { TestTwo };
