export {};

abstract class Animal {
  abstract cry(): string;
}
//抽象クラス

class Lion extends Animal {
  cry() {
    return 'roar';
  }
}
//抽象クラスを継承したクラスは抽象メソッドを実装しないといけない
class Tiger extends Animal {
  cry() {
    return 'grrr';
  }
}