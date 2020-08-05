export {};

type ObjectType = {
  name: string;
  age: number;
};

//interfaceも先頭は大文字
interface ObjectInterface {
  name: string;
  age: number;
}

let object: ObjectInterface = {
  name: 'Ham',
  age: 43,
};
