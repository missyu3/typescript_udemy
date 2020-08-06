export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
};

const DaimaginSasaki: Pitcher1 = {
  throwingSpeed: 154,
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367,
};

//複数の型を&で合成することができる。この型を交差型（intersection型）と呼ぶ。
type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShohei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286,
};
