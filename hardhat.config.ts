require('@matterlabs/hardhat-zksync-deploy');
require('@matterlabs/hardhat-zksync-solc');

// dynamically changes endpoints for local tests
const zkSyncDeploy =
  process.env.NODE_ENV == 'test'
    ? {
        zkSyncNetwork: 'http://localhost:3050',
        ethNetwork: 'http://localhost:8545',
      }
    : {
        zkSyncNetwork: 'https://zksync2-testnet.zksync.dev',
        ethNetwork: 'goerli',
      };

module.exports = {
  zksolc: {
    version: '1.2.0',
    compilerSource: 'binary',
    settings: {
      optimizer: {
        enabled: true,
      },
      experimental: {
        dockerImage: 'matterlabs/zksolc',
        tag: 'v1.2.0',
      },
    },
  },
  zkSyncDeploy,
  networks: {
    hardhat: {
      zksync: true,
    },
  },
  solidity: {
    version: '0.8.16',
  },
};
