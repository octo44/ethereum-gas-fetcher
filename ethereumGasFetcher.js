// ethereumGasFetcher.js
const axios = require('axios');
const Web3 = require('web3');
const { argv } = require('yargs');

class EthereumGasFetcher {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/v3/' + apiKey));
  }

  async getGasPrice() {
    const response = await axios.get('https://www.gasnow.org/api/v3/gas/price?utm_source=ethereum-gas-fetcher');
    return response.data.data;
  }
}

// Exports the class to be used as a module
module.exports = EthereumGasFetcher;

// Example usage
if (require.main === module) {
  const apiKey = argv.apiKey || process.env.INFURA_API_KEY;
  if (!apiKey) {
    console.error('Please provide an Infura API key using --apiKey or set it in the environment variable INFURA_API_KEY.');
    process.exit(1);
  }

  const gasFetcher = new EthereumGasFetcher(apiKey);

  gasFetcher.getGasPrice().then((gasPrice) => {
    console.log('Current Gas Price:', gasPrice);
  });
}
