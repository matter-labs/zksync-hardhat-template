import * as ethers from "ethers";
import * as hre from "hardhat";

import { Deployer } from "@matterlabs/hardhat-zksync-deploy";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import { Wallet } from "zksync-web3";
// load env file
import dotenv from "dotenv";

dotenv.config();

// load wallet private key from env file
const PRIVATE_KEY = process.env.WALLET_PRIVATE_KEY || "";

if (!PRIVATE_KEY)
  throw "⛔️ Private key not detected! Add it to the .env file!";

// An example of a deploy script that will deploy and call a simple contract.
async function main() {
  console.log(`Running deploy script for the Box contract`);

  // Initialize the wallet.
  const wallet = new Wallet(PRIVATE_KEY);

  // Create deployer object and load the artifact of the contract you want to deploy.
  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact("Box");
  const box = await hre.zkUpgrades.deployProxy(deployer.zkWallet, artifact, [42], { initializer: "initialize" });

  await box.deployed();

  // Show the contract info.
  const contractAddress = box.address;
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`);

  console.log("Box deployed to:", box.address);

  box.connect(wallet);
  const value = await box.retrieve();
  console.log("Box value is: ", value.toNumber());
}


main().then().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});