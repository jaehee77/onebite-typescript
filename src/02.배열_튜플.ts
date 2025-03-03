// 배열
const numArr: number[] = [1, 2, 3];

const strArr: string[] = ['가', '나', '다'];

// 제네릭
const boolArr: Array<boolean> = [true, false, false];

// 배열에 들어가는 요소들의 타입이 다양할 경우
// 유니온 타입(|)
const multiArr: (string | number | boolean)[] = [1, 'hello', true];

// 다차원 배열의 타입을 정의하는 방법
const doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

/**
 * 튜플 타입
 * 자바스크립트에는 없는 타입으로 타입스크립트에서만 제공되는 타임
 * -> 길이와 타입이 고정된 배열
 */
let tuple1: [number, number] = [1, 2];
let tuple2: [number, string, boolean] = [1, 'hello', false];

// 아래와 같이 튜플은 정의한 길이에서 push, pop 이 가능해서 불안정하여 주의 필요 !!
tuple1.push(1);
tuple2.pop();

// 사용 예시
const users: [string, number][] = [
  ['김재희', 1],
  ['김아무개', 2],
  ['박아무개', 3],
  ['최아무개', 4],
  // [5, '신아무개'], /* 여기서 에러 발생 => 값을 잘못 넣지 않도록 방지 */
];
