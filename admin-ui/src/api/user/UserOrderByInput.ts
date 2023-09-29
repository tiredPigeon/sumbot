import { SortOrder } from "../../util/SortOrder";

export type UserOrderByInput = {
  countLimit?: SortOrder;
  createdAt?: SortOrder;
  expireDate?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  password?: SortOrder;
  roles?: SortOrder;
  totalGb?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
};
