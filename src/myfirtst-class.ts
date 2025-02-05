export {};

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  profile(): string {
    return `name: ${this.name} , age: ${this.age}`;
  }
}
let toke = new Person('toke', 38);
console.log(toke.profile());

//JSでクラスを作ったらこうなる。インスタンスを作っている。
// let bob = new Person();
// let tom = new Person();
//いくらでもインスタンスを作れる


