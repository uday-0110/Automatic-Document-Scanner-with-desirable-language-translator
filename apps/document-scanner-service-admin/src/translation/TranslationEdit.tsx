import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TranslationEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="originalText" multiline source="originalText" />
        <TextInput label="translatedText" multiline source="translatedText" />
        <TextInput label="targetLanguage" source="targetLanguage" />
      </SimpleForm>
    </Edit>
  );
};
