/**
 * 함수 타입 표현식(function type expression)
 */

type Sum = (a: number, b: number) => number;

const sum: Sum = (a, b) => a + b;

// 활용예제) 사칙연산과 같은 함수에서 중복되는 타입이 많을 경우에..
type Operation = (a: number, b: number) => number;

const add: Operation = (a, b) => a + b;
// 아래와 같이 작성할 수 있음 -> 타입별칭에 담은 것을 그대로 적은 것 뿐(변수로 담은 것)
const add2: (a: number, b: number) => number = (a, b) => a + b;

const sub: Operation = (a, b) => a - b;

const multiply: Operation = (a, b) => a * b;

const divide: Operation = (a, b) => a / b;

//

{
  /**
   * 호출 시그니처(콜 시그니처)
   */

  type Operation = {
    (a: number, b: number): number;
    name: string; // 하이브리드 타입
  };

  const add: Operation = (a, b) => a + b;

  const sub: Operation = (a, b) => a - b;

  const multiply: Operation = (a, b) => a * b;

  const divide: Operation = (a, b) => a / b;

  add(1, 2);
  add.name = '하이브리드 시그니처';
}
