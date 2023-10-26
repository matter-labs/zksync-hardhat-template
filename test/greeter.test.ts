import { expect } from 'chai';
import { getWallet, deployContract } from '../deploy/utils';

const RICH_WALLET_PK = '0x7726827caac94a7f9e1b160f7ea819f172f7b6f9d2a97f992c38edeab82d4110';

describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const wallet = getWallet(RICH_WALLET_PK);

    const greeting = "Hello world!";
    const greeter = await deployContract("Greeter", [greeting], { wallet, silent: true });

    expect(await greeter.greet()).to.eq(greeting);

    const newGreeting = "Hola, mundo!";
    const setGreetingTx = await greeter.setGreeting(newGreeting);
    
    // wait until the transaction is mined
    await setGreetingTx.wait();

    expect(await greeter.greet()).to.equal(newGreeting);
  });
});
