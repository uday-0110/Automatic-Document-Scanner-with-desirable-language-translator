import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { ProcessingStatusModuleBase } from "./base/processingStatus.module.base";
import { ProcessingStatusService } from "./processingStatus.service";
import { ProcessingStatusController } from "./processingStatus.controller";
import { ProcessingStatusResolver } from "./processingStatus.resolver";

@Module({
  imports: [ProcessingStatusModuleBase, forwardRef(() => AuthModule)],
  controllers: [ProcessingStatusController],
  providers: [ProcessingStatusService, ProcessingStatusResolver],
  exports: [ProcessingStatusService],
})
export class ProcessingStatusModule {}
