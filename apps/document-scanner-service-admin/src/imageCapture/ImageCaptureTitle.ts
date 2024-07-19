import { ImageCapture as TImageCapture } from "../api/imageCapture/ImageCapture";

export const IMAGECAPTURE_TITLE_FIELD = "imageUrl";

export const ImageCaptureTitle = (record: TImageCapture): string => {
  return record.imageUrl?.toString() || String(record.id);
};
