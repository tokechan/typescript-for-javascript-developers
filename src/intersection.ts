export {};

type Pitcher1 = {
  throwingSpeed: number;
};

type Batter1 = {
  battingAverage: number;
}

// type TwoWayPlayer = {
//   throwingSpeed: number;
//   battingAverage: number;
// };

const DaimajinSsaki: Pitcher1 = {
  throwingSpeed: 156
};

const OchiaiHiromitsu: Batter1 = {
  battingAverage: 0.367
};

type TwoWayPlayer = Pitcher1 & Batter1;

const OtaniShouhei: TwoWayPlayer = {
  throwingSpeed: 165,
  battingAverage: 0.286
};

