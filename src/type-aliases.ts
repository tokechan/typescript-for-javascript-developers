export {};

type Mojiretsu = string;

const fooString: string = 'Hello';
const fooMojiretsu: Mojiretsu = 'Hello';

const example1 = {
  name: 'toke',
  age: 38
};

type Profile = {
  name: string;
  age: number;
};

const example2: Profile = {
  name: 'toke',
  age: 38
};

type Profile2 = typeof example1;