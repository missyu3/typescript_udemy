export {};

//呼び出し元に戻らない場合の型がnever
//呼び出し元に戻るが、返り値がない場合がvoid
function error(message: string): never {
  throw new Error(message);
}
try {
  let result = error('test');
  console.log({ result });
} catch (error) {
  console.log({ error });
}
