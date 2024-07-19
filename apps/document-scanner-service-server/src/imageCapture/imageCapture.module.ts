import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ImageCaptureModuleBase } from "./base/imageCapture.module.base";
import { ImageCaptureService } from "./imageCapture.service";
import { ImageCaptureController } from "./imageCapture.controller";
import { ImageCaptureResolver } from "./imageCapture.resolver";

@Module({
  imports: [ImageCaptureModuleBase, forwardRef(() => AuthModule)],
  controllers: [ImageCaptureController],
  providers: [ImageCaptureService, ImageCaptureResolver],
  exports: [ImageCaptureService],
})
export class ImageCaptureModule {}
