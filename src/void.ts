export {};

//何もデータが存在しないときに指定する。何も返さない場合などに指定する。
function returnNothing(): void {
  console.log("I don't return anything!");
}

console.log(returnNothing());
