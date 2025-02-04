export {};

let profile1: object = { name: 'Toke' };
profile1 = { birthYear: 1986 };

let profile2: {name: string} =  {name: 'Toke'};
profile2 = { name: 'Aaron' }

//型宣言というのは変数宣言に対してできるだけ、締め付けるような型
//制約ができるだけ強くなるような型を定義するのが理想
//なぜならば、想定がのデータの混入を防ぐことができるから
//objectは、あまり使わない
//object使う時は、極力プロパティを定義しておく