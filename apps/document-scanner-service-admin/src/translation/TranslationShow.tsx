import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const TranslationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="ID" source="id" />
        <DateField source="createdAt" label="Created At" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="originalText" source="originalText" />
        <TextField label="translatedText" source="translatedText" />
        <TextField label="targetLanguage" source="targetLanguage" />
      </SimpleShowLayout>
    </Show>
  );
};
