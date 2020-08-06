export {};

//無名関数
//型を拘束しなくても良いが、拘束したい場合は記載する
let bmi: (height: number, weight: number) => number = function (
  height: number,
  weight: number
): number {
  return weight / (height * height);
};

console.log(bmi(1.78, 86));
