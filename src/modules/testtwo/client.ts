import axios, { AxiosError, AxiosResponse } from 'axios';
import { IText, ISubText, ISubmitPayload } from 'testtwo';

export const getText = (): Promise<string> => {
  return axios({
    baseURL: 'https://join.reckon.com/test2/textToSearch',
    method: 'get',
  })
    .then((response: AxiosResponse) => {
      return Promise.resolve((response.data as IText).text);
    })
    .catch((error: AxiosError) => {
      return getText();
    });
};

export const getSubText = (): Promise<Array<string>> => {
  return axios({
    baseURL: 'https://join.reckon.com/test2/subTexts',
    method: 'get',
  })
    .then((response: AxiosResponse) => {
      return Promise.resolve((response.data as ISubText).subTexts);
    })
    .catch((error: AxiosError) => {
      return getSubText();
    });
};

export const submit = (payload: ISubmitPayload, n: number = 10): Promise<any> => {
  return axios({
    baseURL: 'https://join.reckon.com/test2/submitResults',
    method: 'post',
    data: payload,
  })
    .then((response: AxiosResponse) => {
      return Promise.resolve((response.data));
    })
    .catch((error: AxiosError) => {
      if (n === 1) {
        throw error;
      } else {
        return submit(payload, n - 1);
      }
    });
};
