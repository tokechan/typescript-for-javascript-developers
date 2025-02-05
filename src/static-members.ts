export {};

class Me {
  static isProgrammer: boolean = true;
  static firstName: string = 'bob';
  static lastName: string = 'smith';

  static work() {
    return `Hey, guys! Thsi is  ${this.firstName} are you interested in TypeScript?`;
  }
}

// let me = new Me();
// console.log(me.isProgrammer);
console.log(Me.isProgrammer);
console.log(Me.work());