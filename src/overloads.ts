export {};

function double(value: number): number;
function double(value: string): string;

function double(value: any): any {
  console.log(typeof value);
  if (typeof value === 'number') {
    return value * 2;
  } else {
    return value + value;
  }
}
// オーバーロード
//型が違う関数で上のやつはnumber型

// function double(value: string): string {
//   return value + value;
// }
// 型が違う関数でこちらはstring型
// シグネイチャーを使ってオーバーロードをする


console.log(double(100));
console.log(double('Go'));
