export interface ICauseCommon {
  title: string;
  description: string;
  goalAmount: number;
  raisedAmount: number;
  image: string;
  createdBy: Record<string, unknown>;
  createdAt: Date;
  updatedAt: Date;
  [key: string]: any;
}
export type ICause = Partial<ICauseCommon> & Record<string, any>;
