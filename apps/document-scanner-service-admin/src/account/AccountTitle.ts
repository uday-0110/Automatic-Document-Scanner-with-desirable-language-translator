import { Account as TAccount } from "../api/account/Account";

export const ACCOUNT_TITLE_FIELD = "username";

export const AccountTitle = (record: TAccount): string => {
  return record.username?.toString() || String(record.id);
};
