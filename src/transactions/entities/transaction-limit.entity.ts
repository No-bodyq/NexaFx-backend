import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { UserKycTier } from '../../users/user.entity';

@Entity('transaction_limits')
export class TransactionLimit {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    type: 'enum',
    enum: UserKycTier,
    unique: true,
  })
  tier: UserKycTier;

  @Column({ type: 'decimal', precision: 20, scale: 8 })
  dailyLimitUsd: string;

  @Column({ type: 'decimal', precision: 20, scale: 8 })
  monthlyLimitUsd: string;

  @Column({ type: 'decimal', precision: 20, scale: 8 })
  singleTxLimitUsd: string;

  @CreateDateColumn({ type: 'timestamp with time zone' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamp with time zone' })
  updatedAt: Date;
}
