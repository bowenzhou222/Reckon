import { Request, Response } from 'express';
import * as client from './client';
import { IResult } from 'testtwo';
import { AxiosError } from 'axios';

export const search = (req: Request, res: Response): Promise<Response> => {
  return client.getText()
    .then((text: string) => {
      return client.getSubText()
        .then((subText: Array<string>) => {
          const results: Array<IResult> = subText.map((pattern: string) => ({
            subtext: pattern,
            result: findSubstring(text, pattern),
          }));
          return client.submit({
            candidate: 'Bowen Zhou',
            text,
            results,
          })
            .then((response: any) => {
              return res.json(response);
            });
        });
    })
    .catch((e: AxiosError) => {
      if (!!e.response) {
        return res.status(e.response.status).json(e.response.data);
      }
      return res.status(400).send(e.message);
    });
};

const findSubstring = (text: string, pattern: string): string => {
  const result = [];
  let i = 0;
  while (i < text.length) {
    if (i + pattern.length <= text.length) {
      if (text.slice(i, i + pattern.length).toLowerCase() === pattern.toLowerCase()) {
        result.push(i + 1);
      }
    }
    i += 1;
  }
  return !!result.length
    ? result.join(', ')
    : '<No Output>';
};
