/********************************************************
 * Copyright 2025 Grow Family Team.
 * All rights reserved.
 *********************************************************/

import { create } from "zustand";

interface IPostZustand {
  data: IPost;
  initial: (data: IPost) => void;
  setTitle: (title: string) => void;
  setForeword: (foreword: string) => void;
  addNode: (node: NodeType[]) => void;
  editNode: (node: NodeType[]) => void;
}

export const initialState: IPost = {
  Id: "1",
  Title: "",
  Foreword: "",
  Node: [],
};

export const usePostZustand = create<IPostZustand>((set) => ({
  data: initialState,
  initial: (data) =>
    set(() => ({
      data: data,
    })),
  setTitle: (title: string) =>
    set((state) => ({ data: { ...state.data, Title: title } })),
  setForeword: (foreword: string) =>
    set((state) => ({ data: { ...state.data, Foreword: foreword } })),
  addNode: (node: NodeType[]) =>
    set((state) => ({ data: { ...state.data, Node: node } })),
  editNode: (node: NodeType[]) =>
    set((state) => ({ data: { ...state.data, Node: node } })),
}));
