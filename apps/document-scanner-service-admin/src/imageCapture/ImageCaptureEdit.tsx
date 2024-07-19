import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  DateTimeInput,
} from "react-admin";

export const ImageCaptureEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="imageURL" source="imageUrl" />
        <DateTimeInput label="captureDate" source="captureDate" />
      </SimpleForm>
    </Edit>
  );
};
