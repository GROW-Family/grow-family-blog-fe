/********************************************************
 * Copyright 2025 Grow Family Team.
 * All rights reserved.
 *********************************************************/

import { create } from "zustand";

import { IUserProfile } from "userSrc/types/profile";

interface ProfileState {
  dataProfile: IUserProfile | null;
  setProfile: (profile: IUserProfile) => void;
}

export const useProfileZustand = create<ProfileState>((set) => ({
  dataProfile: null,
  setProfile: (dataProfile) => set({ dataProfile }),
}));
