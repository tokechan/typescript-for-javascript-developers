export {};
 
namespace Japanese {
  export namespace Tokyo {
    export class Person {
      constructor(public name: string) {}
    }
  }
  export namespace Osaka {
    export class Person {
      constructor(public name: string) {}
    }
  }
}

namespace English {
  export class Person {
    constructor(
      public firstName: string,
      public middleName: string,
      public lastName: string
    ) {}
  }
}

const me = new Japanese.Tokyo.Person('bob');
console.log(me.name);

const meOsaka = new Japanese.Osaka.Person('bobやん');
console.log(meOsaka.name);

const other = new English.Person('mike', 'john', 'smith');
console.log(other.middleName);
console.log(other);
