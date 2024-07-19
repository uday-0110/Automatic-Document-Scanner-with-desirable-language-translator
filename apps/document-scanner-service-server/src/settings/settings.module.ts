import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { SettingsModuleBase } from "./base/settings.module.base";
import { SettingsService } from "./settings.service";
import { SettingsController } from "./settings.controller";
import { SettingsResolver } from "./settings.resolver";

@Module({
  imports: [SettingsModuleBase, forwardRef(() => AuthModule)],
  controllers: [SettingsController],
  providers: [SettingsService, SettingsResolver],
  exports: [SettingsService],
})
export class SettingsModule {}
