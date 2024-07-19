import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ProcessingStatusService } from "./processingStatus.service";
import { ProcessingStatusControllerBase } from "./base/processingStatus.controller.base";

@swagger.ApiTags("processingStatuses")
@common.Controller("processingStatuses")
export class ProcessingStatusController extends ProcessingStatusControllerBase {
  constructor(
    protected readonly service: ProcessingStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
