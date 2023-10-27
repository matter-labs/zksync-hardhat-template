import { expect } from 'chai';
import { Contract, Wallet } from "zksync-web3";
import { getWallet, deployContract, LOCAL_RICH_WALLETS } from '../../deploy/utils';

describe("My nft z", function () {
  it("My nft z", async function () {
    const wallet = getWallet(LOCAL_RICH_WALLETS[0].privateKey);
    const greeting = "Hello world!";
    const greeter = await deployContract("Greeter", [greeting], { wallet, silent: true });
  });
});
