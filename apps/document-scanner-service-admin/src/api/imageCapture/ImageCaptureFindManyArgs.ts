import { ImageCaptureWhereInput } from "./ImageCaptureWhereInput";
import { ImageCaptureOrderByInput } from "./ImageCaptureOrderByInput";

export type ImageCaptureFindManyArgs = {
  where?: ImageCaptureWhereInput;
  orderBy?: Array<ImageCaptureOrderByInput>;
  skip?: number;
  take?: number;
};
