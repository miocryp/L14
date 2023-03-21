import { Controller, Get, Query, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { CreatePaymentOrderDTO } from './dtos/createPaymentOrder.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
 

  @Get('/contract-address')
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }

  @Get('/total-supply')
  async getTotalSupply(): Promise<number> {
    return await this.appService.getTotalSupply();
  }
  @Get('/allowance')
  async getAllowance(
    @Query('from') from: string,
    @Query('to') to: string,
  ): Promise<number> {
    return await this.appService.getAllowance(from, to);
  }
  @Get('/transaction-status')
  async getTransactionStatus(
    @Query('hash')
    hash: string,
  ): Promise<string> {
    return await this.appService.getTransactionStatus(hash);
  }
  @Get('/payment-orders')
  async getPaymentOrders() {
    return await this.appService.getPaymentOrders();
  }

  @Post('/payment-order')
  async createPaymentOrder(@Body() body: CreatePaymentOrderDTO) {
    return await this.appService.createPaymentOrder(body.value, body.secret);
  }
}
