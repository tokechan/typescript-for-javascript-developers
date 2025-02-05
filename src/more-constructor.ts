export {};

// class Person {
//   public name: string;
//   protected age: number;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
//基本的なクラスの作り方

// TSでは負荷を軽減できる　短縮した書き方がある
class Person {
  constructor(public name: string, protected age: number) {}
}
// TSではコンストラクター処理の中で初期化も行ってくれるのでこうかける
const me = new Person('tokesan', 38);
console.log(me);
