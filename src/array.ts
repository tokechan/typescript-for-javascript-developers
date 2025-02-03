export {};

let numbers: number[] = [1, 2, 3];
//こちらが推奨
let numbers2: Array<number> =[1, 2, 3, 4];
//別の書き方

//配列にはナンバーだけでなく、文字列も扱うことがある
let strings: Array<string> = ['Tokyo', 'Osaka', 'Kyoto'];

let strings2: string[] = ['TypeScript', 'JavaScript', 'CoffeeScript']

let nijigenHairetsu: number[][] = [
    [50, 100],
    [150, 300],
]
//二次元配列　x、yの座標を使う時など


let hairetsu: (string | number | boolean)[] = [1, 'Tokyo', false];
//複数の型を許可する
//供用型　ユニオンタイプス




