import * as express from 'express';
import { Health } from './modules/health';
import { TestOne } from './modules/testone';
import { TestTwo } from './modules/testtwo';

const router = express.Router();

router.use(
  Health,
  TestOne,
  TestTwo,
);

export { router };
