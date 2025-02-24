export const CoinsApi = (coinIds: string[]): string => 
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${coinIds.join(",")}`;
  