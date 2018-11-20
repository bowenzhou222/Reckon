import { Request, Response } from 'express';
import * as client from './client';
import { IRangeinfo, IDivisorInfo, IDivisor } from 'testone';

export const divide = (req: Request, res: Response): Promise<Response> => {
  return client.getRangeInfo()
    .then((rangeInfo: IRangeinfo) => {
      return client.getDivisorInfo()
        .then((divisorInfo: IDivisorInfo) => {
          const numbers = Array(rangeInfo.upper - rangeInfo.lower + 1)
            .fill(0).map((n: number, i: number) => i + rangeInfo.lower);
          const responseString = numbers.map((n: number) => {
            return `<p>${n}: ${divisorInfo.outputDetails.map((divisor: IDivisor) => {
              return Number.isInteger(n / divisor.divisor)
                ? divisor.output
                : '';
            }).join(' ')}</p>`;
          }).join('');
          const html = `
            <!DOCTYPE html>
            <html>
              <head>
                <title>Reckon test</title>
              </head>
              <body>
                ${responseString}
              </body>
            </html>
          `;
          return res.send(html);
        });
    })
    .catch((error: any) => {
      return res.send('Something went wrong');
    });
};
