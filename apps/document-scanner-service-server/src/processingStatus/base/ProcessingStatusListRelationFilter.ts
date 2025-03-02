/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProcessingStatusWhereInput } from "./ProcessingStatusWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProcessingStatusListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProcessingStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessingStatusWhereInput)
  @IsOptional()
  @Field(() => ProcessingStatusWhereInput, {
    nullable: true,
  })
  every?: ProcessingStatusWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProcessingStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessingStatusWhereInput)
  @IsOptional()
  @Field(() => ProcessingStatusWhereInput, {
    nullable: true,
  })
  some?: ProcessingStatusWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProcessingStatusWhereInput,
  })
  @ValidateNested()
  @Type(() => ProcessingStatusWhereInput)
  @IsOptional()
  @Field(() => ProcessingStatusWhereInput, {
    nullable: true,
  })
  none?: ProcessingStatusWhereInput;
}
export { ProcessingStatusListRelationFilter as ProcessingStatusListRelationFilter };
