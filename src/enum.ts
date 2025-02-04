export {};

enum Months {
  January = 1,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December
}
//enumはオブジェクトではないので、プロパティを取得することができる 自動で数値を割り当てる

console.log(Months.January);
console.log(Months.February);
console.log(Months.June);


enum COLORS {
  RED = '#FF0000',
  WHITE = '#FFFFFF',
  GREEN = '#008000',
  BLUE = '#0000FF',
  BLACK = '#000000'
}

let green = COLORS.GREEN;
console.log({green});

enum COLORS {
  YELLOW = '#FFFF00',
  GRAY = '#808080',
}

COLORS.YELLOW;
COLORS.GRAY;
