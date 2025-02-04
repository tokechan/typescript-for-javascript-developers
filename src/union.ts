export {};

let value: number = 1;
value = 100;
value = 'hello';
//これはエラーになる
//number型とstring型は、互換性がないので、エラーになるので、union型を使う

let union: number | string = 1;
union = 'hello';
union = 100;
//union型は、2つの型のどちらかを許可する  
