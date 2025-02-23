import { type Method } from 'axios';

export interface IApiRequest {
  method: Lowercase<Method>;
  url: string;
  payload?: unknown;
  params?: unknown;
  token?: boolean;
  host?: string;
  headers?: object;
  auth?: object;
  timeout?: number;
  callbackWhenError?: VoidFunction;
}
export interface IRequestInterface {
  data: object;
}

export interface IDataResponse {
    status: string;
    data: unknown;
  message: string;
}


export type State = Record<string, VoidFunction>;
