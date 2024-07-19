import { Translation as TTranslation } from "../api/translation/Translation";

export const TRANSLATION_TITLE_FIELD = "targetLanguage";

export const TranslationTitle = (record: TTranslation): string => {
  return record.targetLanguage?.toString() || String(record.id);
};
