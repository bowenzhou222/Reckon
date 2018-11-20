import axios, { AxiosError, AxiosResponse } from 'axios';
import { IRangeinfo, IDivisorInfo } from 'testone';

export const getRangeInfo = (): Promise<IRangeinfo> => {
  return axios({
    baseURL: 'https://join.reckon.com/test1/rangeInfo',
    method: 'get',
  })
    .then((response: AxiosResponse) => {
      return Promise.resolve(response.data);
    })
    .catch((error: AxiosError) => {
      return getRangeInfo();
    });
};

export const getDivisorInfo = (): Promise<IDivisorInfo> => {
  return axios({
    baseURL: 'https://join.reckon.com/test1/divisorInfo',
    method: 'get',
  })
    .then((response: AxiosResponse) => {
      return Promise.resolve(response.data);
    })
    .catch((error: AxiosError) => {
      return getDivisorInfo();
    });
};
