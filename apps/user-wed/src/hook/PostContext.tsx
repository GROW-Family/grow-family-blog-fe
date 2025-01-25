/********************************************************
 * Copyright 2024 Nguyen Trong Qui.
 * All rights reserved.
 *********************************************************/

import { create } from 'zustand';
import { handleAddNode } from './PostFunc';
import { persist } from 'zustand/middleware';

type Action = {
  dispacth: (action: ActionType) => void;
  addNode: (type: TypeNodeType) => void;
};

export enum Types {
  SET_TITLE = 'SET_TITLE',
  SET_FOREWORD = 'SET_FOREWORD',
}

type ActionMapType<T extends { [key: string]: any }> = {
  [Key in keyof T]: T[Key] extends undefined
    ? { type: Key }
    : { type: Key; payload: T[Key] };
};

type PayLoad = {
  [Types.SET_TITLE]: {
    Title: string;
  };
  [Types.SET_FOREWORD]: {
    Foreword: string;
  };
};

type ActionType = ActionMapType<PayLoad>[keyof ActionMapType<PayLoad>];

const handleAction = (state: IPost, action: ActionType) => {
  switch (action.type) {
    case Types.SET_TITLE:
      return { ...state, Title: action.payload.Title };

    case Types.SET_FOREWORD:
      return { ...state, Foreword: action.payload.Foreword };

    default:
      return state;
  }
};

const useNewPostStore = create<IPost & Action>()(
  persist(
    (set) => ({
      Id: `${new Date().getTime()}`,
      Title: '',
      Foreword: '',
      dispacth: (action: ActionType) =>
        set((state) => handleAction(state, action)),
      addNode: (type: TypeNodeType) =>
        set((state) => handleAddNode(state, type)),
    }),
    {
      name: 'post-new',
    }
  )
);

export default useNewPostStore;
