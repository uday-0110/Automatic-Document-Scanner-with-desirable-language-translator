import { TranslationWhereInput } from "./TranslationWhereInput";
import { TranslationOrderByInput } from "./TranslationOrderByInput";

export type TranslationFindManyArgs = {
  where?: TranslationWhereInput;
  orderBy?: Array<TranslationOrderByInput>;
  skip?: number;
  take?: number;
};
