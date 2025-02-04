import axios from 'axios';

export {};

let url: string = 'https://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
    interface Article {
      id: number;
      title: string;
      description: string
    }
    let data: Article[];
    data = response.data;
    data = [
      {
        id:1,
        title:'title',
        description:'description'  
      }
    ]
    console.log(data);
  });

  //このように、型を定義しないと、どんな型が返ってくるかわからない
  //そのため、anyを使う
  //anyはどんな型でも許可する
  //anyは推奨されていない
  //なぜなら、型がないと、エラーが出ないので、エラーが出ないことになる
  //そのため、anyは推奨されていない
  //やむを得ない時以外は使わない