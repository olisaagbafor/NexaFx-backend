import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Transaction } from './transactions/entities/transaction.entity';
import { TransactionsService } from './transactions/transactions.service';
import { TransactionsController } from './transactions/transactions.controller';
import { Currency } from './currencies/entities/currency.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Transaction, Currency])],
  controllers: [TransactionsController],
  providers: [TransactionsService],
})

export class AppModule {} 
