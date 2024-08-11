import { ICause } from "@/app/types/cause";
import { IDonor } from "../donor";
export interface IDonationCommon {
  amount: number;
  donor: IDonor;
  cause: ICause;
  createdBy: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;
}
export type IDonation = Partial<IDonationCommon> & Record<string, any>;
