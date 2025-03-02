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
import { ImageCaptureWhereInput } from "./ImageCaptureWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ImageCaptureListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ImageCaptureWhereInput,
  })
  @ValidateNested()
  @Type(() => ImageCaptureWhereInput)
  @IsOptional()
  @Field(() => ImageCaptureWhereInput, {
    nullable: true,
  })
  every?: ImageCaptureWhereInput;

  @ApiProperty({
    required: false,
    type: () => ImageCaptureWhereInput,
  })
  @ValidateNested()
  @Type(() => ImageCaptureWhereInput)
  @IsOptional()
  @Field(() => ImageCaptureWhereInput, {
    nullable: true,
  })
  some?: ImageCaptureWhereInput;

  @ApiProperty({
    required: false,
    type: () => ImageCaptureWhereInput,
  })
  @ValidateNested()
  @Type(() => ImageCaptureWhereInput)
  @IsOptional()
  @Field(() => ImageCaptureWhereInput, {
    nullable: true,
  })
  none?: ImageCaptureWhereInput;
}
export { ImageCaptureListRelationFilter as ImageCaptureListRelationFilter };
