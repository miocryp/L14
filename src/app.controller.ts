import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}
  /*
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get()
  getOtherThing(): string{
    return "This is wrong";
  }
  */
  @Get('/contract-address')
  getContractAddress(): string {
    return this.appService.getContractAddress();
  }

  @Get('/total-supply')
  async getTotalSupply(): Promise<number> {
    return await this.appService.getTotalSupply();
  }
  @Get('/allowance/: from/:to')
  async getAllowance(
    @Param('from') from: string,
    @Param('to') to: string,
  ): Promise<number> {
    return await this.appService.getAllowance(from, to);
  }
}
