import { JsonValue } from "type-fest";

export type User = {
  countLimit: number | null;
  createdAt: Date;
  expireDate: Date | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  totalGb: string | null;
  updatedAt: Date;
  username: string;
};
