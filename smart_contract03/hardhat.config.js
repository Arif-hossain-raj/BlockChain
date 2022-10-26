require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/r6Qg6t2AcXDauEs_CfGBbmZQCQYk_o87',
      accounts: ['0a64bcd5fcb988d7f65b9e72fd144b5ba956575a78ea2f5624f2a4cb9472ae20'],
    },
  },
};
