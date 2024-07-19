import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { ProcessingStatusResolverBase } from "./base/processingStatus.resolver.base";
import { ProcessingStatus } from "./base/ProcessingStatus";
import { ProcessingStatusService } from "./processingStatus.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => ProcessingStatus)
export class ProcessingStatusResolver extends ProcessingStatusResolverBase {
  constructor(
    protected readonly service: ProcessingStatusService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
