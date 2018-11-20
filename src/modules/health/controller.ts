import { Request, Response } from 'express';
import { logger } from '../../utils/log';

export const healthCheck = (req: Request, res: Response): Response => {
  logger('info', 'Health check success');
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Reckon test</title>
      </head>
      <body>
        <h1>Server is running!</h1>
      </body>
    </html>
  `;
  return res.send(html);
};
