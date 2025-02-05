export {};

class Animal {
  constructor(public name: string) {}

  run():string {
    return 'I can run';
  }
}

class Lion extends Animal {
  public speed: number;

  constructor(name: string, speed: number) {
    super(name);//Animalクラスのコンストラクタを呼び出す 初期化も行っている

    this.speed = speed;
    //上のpublic speed: number;を初期化
  }

  run(): string {
  
    return `${super.run()} ${this.speed}km/h very fast `;
  }
}

// let animal = new Animal();
// console.log(animal.run());

// let lion = new Lion();
// console.log(lion.run());
console.log(new Animal('mickey').run());
console.log(new Lion('simba', 120).run());
