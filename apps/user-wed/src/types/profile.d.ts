export interface IUserProfile {
    userId: string;
    userName: string;
    password: string;
    email: string;
    role: number;
    profilePic: string | null;
    fullName: string;
    birthDay: string | null;
    sex: number;
    address: string | null;
    createBy: string;
    createAt: string;
    modifyBy: string | null;
    modifyAt: string | null;
    isDelete: boolean;
  }