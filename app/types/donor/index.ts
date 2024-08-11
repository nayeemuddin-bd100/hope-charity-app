interface IDonorName {
  firstName: string;
  lastName: string;
}

export interface IDonorCommon {
  name: IDonorName;
  email: string;
  profileImage: string;
  contactNo: string;
  address: string;
  user: string;
  donation: string[];
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;
}
export type IDonor = Partial<IDonorCommon> & Record<string, any>;
