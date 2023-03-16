"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppService = void 0;
var common_1 = require("@nestjs/common");
var ethers_1 = require("ethers");
var tokenJson = require("./assets/MyToken.json");
var CONTRACT_ADDRESS = '0xC470Ce18159B781707A03409111346F4F5976C7d';
var AppService = /** @class */ (function () {
    function AppService() {
    }
    AppService.prototype.getContractAddress = function () {
        return CONTRACT_ADDRESS;
    };
    AppService.prototype.getTotalSupply = function () {
        var provider = ethers_1.ethers.getDefaultProvider('goerli');
        var contract = new ethers_1.ethers.Contract(CONTRACT_ADDRESS, tokenJson.abi, provider);
        //return CONTRACT_ADDRESS.totalSupply();
        return contract.totalSupply();
    };
    AppService = __decorate([
        (0, common_1.Injectable)()
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
