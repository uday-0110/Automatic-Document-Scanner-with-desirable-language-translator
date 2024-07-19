import { ProcessingStatusWhereInput } from "./ProcessingStatusWhereInput";
import { ProcessingStatusOrderByInput } from "./ProcessingStatusOrderByInput";

export type ProcessingStatusFindManyArgs = {
  where?: ProcessingStatusWhereInput;
  orderBy?: Array<ProcessingStatusOrderByInput>;
  skip?: number;
  take?: number;
};
