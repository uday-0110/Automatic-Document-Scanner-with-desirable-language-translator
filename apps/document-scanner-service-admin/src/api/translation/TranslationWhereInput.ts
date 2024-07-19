import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type TranslationWhereInput = {
  id?: StringFilter;
  originalText?: StringNullableFilter;
  translatedText?: StringNullableFilter;
  targetLanguage?: StringNullableFilter;
};
