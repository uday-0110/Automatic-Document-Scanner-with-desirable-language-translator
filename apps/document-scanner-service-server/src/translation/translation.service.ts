import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TranslationServiceBase } from "./base/translation.service.base";

@Injectable()
export class TranslationService extends TranslationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
