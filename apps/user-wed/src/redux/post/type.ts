export enum Types {
  SET_TITLE = 'SET_TITLE',
  SET_FOREWORD = 'SET_FOREWORD',
}

type ActionMapType<T extends { [key: string]: any }> = {
  [Key in keyof T]: T[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: T[Key] };
};

export type PayLoad = {
  [Types.SET_TITLE]: {
    Title: string;
  };
  [Types.SET_FOREWORD]: {
    Foreword: string;
  };
};
 
export type ActionType = ActionMapType<PayLoad>[keyof ActionMapType<PayLoad>];