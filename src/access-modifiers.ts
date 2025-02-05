export {};

class Person {
  public name: string;
  // private age: number;
  protected age: number;
  protected nationality: string;

  constructor(name: string, age: number, nationality: string ) {
    this.name = name;
    this.age = age;
    this.nationality = nationality;
  }

  profile(): string {
    return `name: ${this.name} , age: ${this.age}`;
  }
}
class Android extends Person {
  constructor(name: string, age: number, nationality: string) {
    super(name, age, nationality);
  }

  profile(): string {
    return `name: ${this.name} , age: ${this.age} , nationality: ${this.nationality}`;
  }
}



let toke = new Person('toke', 38, 'Japan');
console.log(toke.profile());
console.log(toke.name);
// console.log(toke.age);


