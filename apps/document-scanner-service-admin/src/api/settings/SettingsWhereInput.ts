import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type SettingsWhereInput = {
  id?: StringFilter;
  settingName?: StringNullableFilter;
  settingValue?: StringNullableFilter;
};
