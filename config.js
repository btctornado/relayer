require('dotenv').config()

module.exports = {
  version: 2.6,
  netId: Number(process.env.NET_ID) || 42,
  redisUrl: process.env.REDIS_URL,
  rpcUrl: process.env.RPC_URL || 'https://kovan.infura.io/',
  oracleRpcUrl: process.env.ORACLE_RPC_URL || 'https://mainnet.infura.io/',
  oracleAddress: '0xB5eE7907FF5f4c1FC9086Fc117E6c397431F39ad',
  privateKey: process.env.PRIVATE_KEY,
  mixers: {
    netId1: {
      eth: {
        mixerAddress: {
          '0.1': '0x12D66f87A04A9E220743712cE6d9bB1B5616B8Fc',
          '1': '0x47CE0C6eD5B0Ce3d3A51fdb1C52DC66a7c3c2936',
          '10': '0x910Cbd523D972eb0a6f4cAe4618aD62622b39DbF',
          '100': '0xA160cdAB225685dA1d56aa342Ad8841c3b53f291'
        },
        symbol: 'ETH',
        decimals: 18
      },
      dai: {
        mixerAddress: {
          '100': '0xD4B88Df4D29F5CedD6857912842cff3b20C8Cfa3',
          '1000': '0xFD8610d20aA15b7B2E3Be39B396a1bC3516c7144',
          '10000': '0xF60dD140cFf0706bAE9Cd734Ac3ae76AD9eBC32A',
          '100000': undefined
        },
        tokenAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
        symbol: 'DAI',
        decimals: 18
      },
      pbtc: {
        mixerAddress: {
          '0.001': undefined,
          '0.01': undefined,
          '0.1': undefined,
        },
        tokenAddress: '0x5228a22e72ccC52d415EcFd199F99D0665E7733b',
        symbol: 'pBTC',
        decimals: 18
      }
    },
    netId3: {
      pbtc: {
        mixerAddress: {
          '0.001': '0x59Bf15eC506892396095A50feb077021f39c27Dc',
          '0.01': '0xf5307f6680d335b1cae884b43d5b46e1b3671b30',
          '0.1': '0x758ab20c9a4ad3b609076e5f27b5665ed5b0c682',
        },
        tokenAddress: '0xEB770B1883Dcce11781649E8c4F1ac5F4B40C978',
        symbol: 'pBTC',
        decimals: 18
      }
    }
  },
  defaultGasPrice: 20,
  gasOracleUrls: ['https://ethgasstation.info/json/ethgasAPI.json', 'https://gas-oracle.zoltu.io/'],
  port: process.env.APP_PORT,
  relayerServiceFee: Number(process.env.RELAYER_FEE),
  maxGasPrice: process.env.MAX_GAS_PRICE || 200,
  watherInterval: Number(process.env.NONCE_WATCHER_INTERVAL || 30) * 1000,
  pendingTxTimeout: Number(process.env.ALLOWABLE_PENDING_TX_TIMEOUT || 180) * 1000,
  gasBumpPercentage: process.env.GAS_PRICE_BUMP_PERCENTAGE || 20
}
