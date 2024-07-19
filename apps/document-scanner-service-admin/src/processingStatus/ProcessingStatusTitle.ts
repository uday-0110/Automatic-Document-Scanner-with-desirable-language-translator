import { ProcessingStatus as TProcessingStatus } from "../api/processingStatus/ProcessingStatus";

export const PROCESSINGSTATUS_TITLE_FIELD = "status";

export const ProcessingStatusTitle = (record: TProcessingStatus): string => {
  return record.status?.toString() || String(record.id);
};
