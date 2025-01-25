'use client';

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { PayLoad, Types } from './type';

export const initialState: IPost = {
  Id: '1',
  Title: '',
  Foreword: '',
};

const newPostSlice = createSlice({
  name: 'newPost',
  initialState,
  reducers: {
    initial: (state, action) => {
      state = action.payload;
    },
    setTitle: (state, action: PayloadAction<PayLoad[Types.SET_TITLE]>) => {
      state.Title = action.payload.Title;
    },
    setForeword: (
      state,
      action: PayloadAction<PayLoad[Types.SET_FOREWORD]>
    ) => {
      state.Foreword = action.payload.Foreword;
    },
    addNode: (state, action: PayloadAction<TypeNodeType>) => {
      const Id = `${new Date().getTime()}`;

      let team = state.Node ? [...state.Node] : [];

      if (team.length > 0) {
        team = [
          ...team,
          {
            Id,
            Type: action.payload,
            Content: '',
            Index: team.length + 1,
            ImageURL: '',
          },
        ];
      } else {
        team = [
          {
            Id,
            Type: action.payload,
            Content: '',
            Index: 1,
            ImageURL: '',
          },
        ];
      }

      state.Node = team;
    },
    handleChangeNode: (state, action: PayloadAction<NodeType>) => {
      const team = state.Node ? [...state.Node] : [];
      const indexNode = team.findIndex((e) => e.Id === action.payload.Id);

      if (indexNode > -1) {
        team[indexNode] = action.payload;
      }

      state.Node = team;
    },
    handleDeleteNode: (state, action: PayloadAction<string>) => {
      let team = state.Node ? [...state.Node] : [];
      const indexNode = team.findIndex((e) => e.Id === action.payload);

      if (indexNode > -1) {
        team = team
          .filter((e) => e.Id !== action.payload)
          .map((e, index) => ({ ...e, Index: index + 1 }));
      }

      state.Node = team;
    },
  },
});

export const {
  initial,
  setTitle,
  setForeword,
  addNode,
  handleChangeNode,
  handleDeleteNode,
} = newPostSlice.actions;

export default newPostSlice.reducer;
