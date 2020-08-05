export {};

//union型は複数の型のどちらかを持つことができる
//下の例ではnumberかstringの型を持つことができる。
//結構多くの場面で使用するみたい。
let value: number | string = 1;
value = 'foo';
