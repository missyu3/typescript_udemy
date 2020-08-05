//exportを記載しない場合、Moduleと認識されないので、グローバル変数を参照する恐れがある。その場合、name変数などは使用することができない。
export {};

let isFinished: boolean = true;
isFinished = false;
console.log({ isFinished });
