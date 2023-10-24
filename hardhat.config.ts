import { HardhatUserConfig } from "hardhat/config";

import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

const config: HardhatUserConfig = {
  defaultNetwork: "dockerizedNode",
  networks: {
    zkSyncEraTestnet: {
      url: "https://testnet.era.zksync.dev",
      ethNetwork: "goerli",
      zksync: true,
      verifyURL: "https://zksync2-testnet-explorer.zksync.dev/contract_verification",
    },
    zkSyncEraMainnet: {
      url: "https://mainnet.era.zksync.io",
      ethNetwork: "mainnet",
      zksync: true,
      verifyURL: "https://zksync2-mainnet-explorer.zksync.io/contract_verification",
    },
    dockerizedNode: {
      url: "http://localhost:3050",
      ethNetwork: "localhost",
      zksync: true,
    },
    inMemoryNode: {
      url: "http://localhost:8011",
      ethNetwork: "localhost",
      zksync: true,
    },
    hardhat: {
      zksync: true,
    },
  },
  zksolc: {
    version: "latest",
    settings: {},
  },
  solidity: {
    version: "0.8.17",
  },
};

export default config;
