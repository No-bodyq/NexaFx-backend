import { ApiProperty } from '@nestjs/swagger';
import { IsEnum, IsNumber, Min } from 'class-validator';
import { UserKycTier } from '../../users/user.entity';

export class UpsertTransactionLimitDto {
  @ApiProperty({ enum: UserKycTier })
  @IsEnum(UserKycTier)
  tier: UserKycTier;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  @Min(0)
  dailyLimitUsd: number;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  @Min(0)
  monthlyLimitUsd: number;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  @Min(0)
  singleTxLimitUsd: number;
}

export class PatchTransactionLimitDto {
  @ApiProperty({ example: 1000 })
  @IsNumber()
  @Min(0)
  dailyLimitUsd: number;

  @ApiProperty({ example: 15000 })
  @IsNumber()
  @Min(0)
  monthlyLimitUsd: number;

  @ApiProperty({ example: 1000 })
  @IsNumber()
  @Min(0)
  singleTxLimitUsd: number;
}
