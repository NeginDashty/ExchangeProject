export const MarketCapApi = (coinIds: string[]): string =>
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(",")}&order=market_cap_desc`;
  