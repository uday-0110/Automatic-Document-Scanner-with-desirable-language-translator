import { SortOrder } from "../../util/SortOrder";

export type ImageCaptureOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  imageUrl?: SortOrder;
  captureDate?: SortOrder;
};
