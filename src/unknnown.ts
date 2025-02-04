export {};

const kansu = (): number => 38;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
if (typeof numberUnknown === 'number') {
  let sumUnknown = numberUnknown + 10;
}
//typeguardは、型を確認するための関数
//any型を使うと、型を確認できないので、unknown型を使う
//unknown型は、型を確認できるので、any型を使うときは、型を確認する必要がある  
//その際にはtypeofを使う
//typeofは、型を確認するための関数