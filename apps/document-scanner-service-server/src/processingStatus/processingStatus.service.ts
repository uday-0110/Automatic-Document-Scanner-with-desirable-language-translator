import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ProcessingStatusServiceBase } from "./base/processingStatus.service.base";

@Injectable()
export class ProcessingStatusService extends ProcessingStatusServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
