import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ImageCaptureWhereInput = {
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  captureDate?: DateTimeNullableFilter;
};
