import { Settings as TSettings } from "../api/settings/Settings";

export const SETTINGS_TITLE_FIELD = "settingName";

export const SettingsTitle = (record: TSettings): string => {
  return record.settingName?.toString() || String(record.id);
};
