import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  countLimit?: number | null;
  expireDate?: Date | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  totalGb?: string | null;
  username?: string;
};
