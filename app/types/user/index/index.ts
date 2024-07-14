interface IUserName {
  firstName: string;
  lastName: string;
}

export interface IUserCommon {
  name: IUserName;
  email: string;
  role: "admin" | "super-admin" | "volunteer" | "donor";
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;
}
export type IUser = Partial<IUserCommon> & Record<string, any>;
