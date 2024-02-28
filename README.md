# Ethereum Gas Fetcher

This Node.js utility fetches the current Ethereum gas price using the [GasNow](https://www.gasnow.org/) API.

## Installation

```bash
npm install ethereum-gas-fetcher


Usage

const EthereumGasFetcher = require('ethereum-gas-fetcher');

// Replace 'your_infura_api_key' with your actual Infura API key
const apiKey = 'your_infura_api_key';
const gasFetcher = new EthereumGasFetcher(apiKey);

gasFetcher.getGasPrice().then((gasPrice) => {
  console.log('Current Gas Price:', gasPrice);
});
