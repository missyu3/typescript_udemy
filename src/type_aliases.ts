export {};

//エイリアスの際の先頭は大文字にする。
type Mojiretu = string;
const fooString: string = 'Hello';
const fooMojiretu: Mojiretu = 'Hello';

type Profile = {
  name: string;
  age: number;
};
const example1: Profile = {
  name: 'Ham',
  age: 43,
};

//example1の方が変更された時、追従されるので使い勝手が良い。
type Profile2 = typeof example1;
