import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WalletsEntity } from './wallets.entity';
import { WalletsService } from './wallets.service';

@Module({
  imports: [TypeOrmModule.forFeature([WalletsEntity])],
  providers: [WalletsService],
  exports: [WalletsService],
})
export class BlockchainModule {}
