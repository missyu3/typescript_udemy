export {};

//アロー関数とは
//・より短く記述できるfunction式の代替構文
//・this,arguments,super,new.targetを束縛しない
//https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Functions/Arrow_functions
//thisとは
//https://qiita.com/takeharu/items/9935ce476a17d6258e27
let bmi: (height: number, weight: number) => number = (
  height: number,
  weight: number
): number => weight / (height * height);

console.log(bmi(1.78, 86));
