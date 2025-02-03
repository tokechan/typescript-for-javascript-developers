export {};

function error(message: string): never{
  throw new Error(message);
}

try {
  let result = error('test');
  console.log;
} catch(error) {
  console.log({ error })
}

let foo: void = undefined;
let bar: never = error('only me');

//neverは、関数が終了しないことを示す
//呼び元に唯一戻ってこない型
//文法上の決まり
//voidと違う
//voidは、関数が終了することを示す
//neverは、関数が終了しないことを示す
//never型にはデータを代入することはできない
//唯一代入できる型がある　never型を返す時であれば代入できるが、どんな時に使うか不明


//try catchでエラーをキャッチしているので、エラーが出ない 例外をキャッチしている
//エラーが出ないので、resultにはneverが返ってくる
