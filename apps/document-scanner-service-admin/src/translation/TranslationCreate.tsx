import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TranslationCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="originalText" multiline source="originalText" />
        <TextInput label="translatedText" multiline source="translatedText" />
        <TextInput label="targetLanguage" source="targetLanguage" />
      </SimpleForm>
    </Create>
  );
};
