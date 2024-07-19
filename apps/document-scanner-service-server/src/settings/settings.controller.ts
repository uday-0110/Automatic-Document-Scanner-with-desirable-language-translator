import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { SettingsService } from "./settings.service";
import { SettingsControllerBase } from "./base/settings.controller.base";

@swagger.ApiTags("settings")
@common.Controller("settings")
export class SettingsController extends SettingsControllerBase {
  constructor(
    protected readonly service: SettingsService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
