import axios from 'axios';
export {};

//型推論ができない場合、any型となる。
let url: string =
  'http://udemy-utils.herokuapp.com/api/v1/articles?token=token123';

axios.get(url).then(function (response) {
  interface Article {
    id: number;
    title: string;
    description: string;
  }
  let data: Article[] = response.data;
  data = [
    {
      id: 1,
      title: 'string',
      description: 'string',
    },
  ];
  console.log(data);
});
