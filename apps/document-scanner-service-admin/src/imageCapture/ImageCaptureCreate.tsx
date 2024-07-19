import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ImageCaptureCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="imageURL" source="imageUrl" />
        <DateTimeInput label="captureDate" source="captureDate" />
      </SimpleForm>
    </Create>
  );
};
