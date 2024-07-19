import { SortOrder } from "../../util/SortOrder";

export type ProcessingStatusOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  message?: SortOrder;
};
