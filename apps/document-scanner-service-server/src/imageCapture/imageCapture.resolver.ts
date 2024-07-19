import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ImageCaptureResolverBase } from "./base/imageCapture.resolver.base";
import { ImageCapture } from "./base/ImageCapture";
import { ImageCaptureService } from "./imageCapture.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ImageCapture)
export class ImageCaptureResolver extends ImageCaptureResolverBase {
  constructor(
    protected readonly service: ImageCaptureService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
