export {};

const kansu = (): number => 43;

let numberAny: any = kansu();
let numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
//numberUnknownは数値ではないかもしれないので、１０を足すのはだめじゃないですか？とエラーを出してくれる。
let sumUnKnown = numberUnknown + 10;

//IF文に入れて、変数の型を特定した場合はエラーにならない。
//【重要！】typeofを使用して変数の型を特定することをタイプガードと言う。
if (typeof numberUnknown === 'number') {
  let sumUnKnown = numberUnknown + 10;
}
