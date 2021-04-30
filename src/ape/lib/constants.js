import BigNumber from 'bignumber.js/bignumber'

export const SUBTRACT_GAS_LIMIT = 100000

const ONE_MINUTE_IN_SECONDS = new BigNumber(60)
const ONE_HOUR_IN_SECONDS = ONE_MINUTE_IN_SECONDS.times(60)
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS.times(24)
const ONE_YEAR_IN_SECONDS = ONE_DAY_IN_SECONDS.times(365)

export const INTEGERS = {
  ONE_MINUTE_IN_SECONDS,
  ONE_HOUR_IN_SECONDS,
  ONE_DAY_IN_SECONDS,
  ONE_YEAR_IN_SECONDS,
  ZERO: new BigNumber(0),
  ONE: new BigNumber(1),
  ONES_31: new BigNumber('4294967295'), // 2**32-1
  ONES_127: new BigNumber('340282366920938463463374607431768211455'), // 2**128-1
  ONES_255: new BigNumber(
    '115792089237316195423570985008687907853269984665640564039457584007913129639935',
  ), // 2**256-1
  INTEREST_RATE_BASE: new BigNumber('1e18'),
}



export const contractAddresses = {
  ape: {
    97: '0x5119823946c574131Ba56F949532bfeDDF987c67',
  },
  masterChef: {
    97: '0x0179a5f6cE74730b257b4dddfE638A99cad503c6',
  },
  weth: {
    97: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
  },
  xApe: {
    97: '0x99A961D0aF0F981c04B80E371A4F19019DEE42D6'
  }
}


export const supportedPools = [
  // Perm Menu
  {
    pid: 0,
    lpAddresses: {
      97: '0x5119823946c574131Ba56F949532bfeDDF987c67',
    },
    tokenAddresses: {
      97: '0x5119823946c574131Ba56F949532bfeDDF987c67',
    },
    name: 'Ape Party!',
    symbol: 'APE-BNB LP',
    tokenSymbol: 'APE',
    icon: '🛍️',
  },
  {
    pid: 1,
    lpAddresses: {
      97: '0x5119823946c574131Ba56F949532bfeDDF987c67',
    },
    tokenAddresses: {
      97: '0x5119823946c574131Ba56F949532bfeDDF987c67',
    },
    name: 'Ape Party!',
    symbol: 'APE-CAKE LP',
    tokenSymbol: 'APE',
    icon: '🛍️',
  }
    
]
