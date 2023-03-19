import { Injectable } from '@nestjs/common';
import { ethers } from 'ethers';
import * as tokenJson from './assets/MyToken.json';

const CONTRACT_ADDRESS = '0xCc7bb2D219A0FC08033E130629C2B854b7bA9195';

@Injectable()
export class AppService {
  provider: ethers.providers.Provider;
  contract: ethers.Contract;

  constructor() {
    this.provider = ethers.getDefaultProvider('goerli');
    this.contract = new ethers.Contract(
      CONTRACT_ADDRESS,
      tokenJson.abi,
      this.provider,
    );
  }
  getContractAddress(): string {
    return this.contract.address;
  }

  async getTotalSupply(): Promise<number> {
    const totalSupplyBN = await this.contract.totalSupply();
    const totalSupplyString = ethers.utils.formatEther(totalSupplyBN);
    const totalSupplyNumber = parseFloat(totalSupplyString);
    return totalSupplyNumber;
  }
  async getAllowance(from: string, to: string): Promise<number> {
    const allowanceBN = await this.contract.allowance(
      from,
      to,
    );
    const allowanceString = ethers.utils.formatEther(allowanceBN);
    const allowanceNumber = parseFloat(allowanceString);
    return allowanceNumber;
  }
  /*
  [x: string]: any;
  getHello(): string {
    return 'Hello visitor number ' + (Math.random() * 1000).toFixed(0);
  }
  */
}
