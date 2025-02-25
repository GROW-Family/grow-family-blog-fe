import { type Method } from "axios";

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

export interface IDataResponse<T> {
  status: number;
  success: boolean;
  data: T;
  message: string;
}

export type State = Record<string, VoidFunction>;
