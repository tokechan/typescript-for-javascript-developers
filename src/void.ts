export {};


function returnNothing(): void {
  console.log("I don't return anything!");
}
//関数から何も返さないときは、voidを使う
//関数には必ずしもreturnがあるわけではないのでそう言った際につかう
console.log(returnNothing());