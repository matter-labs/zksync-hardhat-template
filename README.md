# zksync-hardhat-template

This project was scaffolded with `npx zksync-hardhat init`.

## Project structure

- `/contracts`: smart contracts.
- `/deploy`: deployment and contract interaction scripts.
- `hardhat.config.ts`: configuration file.

## Commands

- `yarn hardhat compile` will compile the contracts.
- `yarn hardhat deploy-zksync` will run the `/deploy/deploy.ts` script. This command accepts a `--script` so you can run other script files.
