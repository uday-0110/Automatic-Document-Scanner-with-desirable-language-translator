import { SortOrder } from "../../util/SortOrder";

export type TranslationOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  originalText?: SortOrder;
  translatedText?: SortOrder;
  targetLanguage?: SortOrder;
};
