import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { TranslationModuleBase } from "./base/translation.module.base";
import { TranslationService } from "./translation.service";
import { TranslationController } from "./translation.controller";
import { TranslationResolver } from "./translation.resolver";

@Module({
  imports: [TranslationModuleBase, forwardRef(() => AuthModule)],
  controllers: [TranslationController],
  providers: [TranslationService, TranslationResolver],
  exports: [TranslationService],
})
export class TranslationModule {}
