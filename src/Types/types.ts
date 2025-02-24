export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_24h: number;

};
export type PersianNamesType = Record<string, string>;
export const persianNames: PersianNamesType = {
    bitcoin: 'بیت کوین',
    tether: 'تتر',
    una: 'una',
    uma: 'UMA',
    fantom: 'فانتوم',
    matic: 'پالیگان',
    binancecoin: 'بایننس کوین',
    gms: 'گیم استار',
    stellar: 'استلار',
    tron: 'ترون',
  };


export type StaticBalancesType = Record<string, number>;

export const staticBalances: StaticBalancesType = {
  lina: 8.76,
  binancecoin: 6.45,
  tether: 0.5,
  fantom: 5.2,
  "matic-network": 11.23,
  tron: -4.81,
};
  