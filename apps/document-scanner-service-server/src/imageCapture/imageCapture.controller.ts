import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ImageCaptureService } from "./imageCapture.service";
import { ImageCaptureControllerBase } from "./base/imageCapture.controller.base";

@swagger.ApiTags("imageCaptures")
@common.Controller("imageCaptures")
export class ImageCaptureController extends ImageCaptureControllerBase {
  constructor(
    protected readonly service: ImageCaptureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
