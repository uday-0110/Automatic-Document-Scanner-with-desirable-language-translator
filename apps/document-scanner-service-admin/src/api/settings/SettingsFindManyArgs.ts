import { SettingsWhereInput } from "./SettingsWhereInput";
import { SettingsOrderByInput } from "./SettingsOrderByInput";

export type SettingsFindManyArgs = {
  where?: SettingsWhereInput;
  orderBy?: Array<SettingsOrderByInput>;
  skip?: number;
  take?: number;
};
