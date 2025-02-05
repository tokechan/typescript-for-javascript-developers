export {};

// getterとsetter
// getterは値を取得するためのメソッド
// setterは値を設定するためのメソッド

// 要件定義
// *owner
//  *所有者
//  *初期化時に設定できる
//  *途中で変更できない
//  *参照できる
// *secretNumber
//  *個人番号
//  *初期化時に設定できる
//  *途中で変更できない
//  *参照できない

class MyNumberCard {
  private _owner: string;
  private _secretNumber: number;

  constructor(owner: string, secretNumber: number) {
    this._owner = owner;
    this._secretNumber = secretNumber;
  }
  // getter 参照するメソッド
  get owner() {
    return this._owner;
  }
  // setter 設定するメソッド
  set secreteNumber(secretNumber: number) {
    this._secretNumber = secretNumber;
  }

  debugPrint() {
    return `secretNumber: ${this._secretNumber}`;
  }
}


let card = new MyNumberCard('toke', 1234567890);
console.log(card.debugPrint());
card.secreteNumber = 1111111111;
console.log(card.debugPrint());
console.log(card.secreteNumber);

// card.secretNumber;
// card.owner = 'toke';
// card._secretNumber;
