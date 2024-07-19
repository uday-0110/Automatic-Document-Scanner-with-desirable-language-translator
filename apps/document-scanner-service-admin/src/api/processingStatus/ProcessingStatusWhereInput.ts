import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ProcessingStatusWhereInput = {
  id?: StringFilter;
  status?: StringNullableFilter;
  message?: StringNullableFilter;
};
