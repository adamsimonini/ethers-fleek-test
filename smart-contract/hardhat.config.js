require('@nomiclabs/hardhat-waffle')
require('dotenv').config()
/**
 * @type import('hardhat/config').HardhatUserConfig
 */

module.exports = {

  defaultNetwork: 'rinkeby',

  solidity: {
    version: '0.8.0',
    settings: {
      optimizer: {
        enabled:true,
        runs: 200
      }
    }
  },
  networks: {
    hardhat: {
    },
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/5OmoYEM6IxrGBKSxMt0cjjmlmQ9S9EDI',
      accounts: [`0x${process.env.PVT_KEY}`]
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
};
