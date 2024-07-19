import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ImageCaptureServiceBase } from "./base/imageCapture.service.base";

@Injectable()
export class ImageCaptureService extends ImageCaptureServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
