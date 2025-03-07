/**
 * infer(inference 추론)
 * 조건부 타입 내에서 특정 타입만 추론해 올 수 있는 기능
 */

{
  type Func = () => string;

  // Func 타입에서 반환값에 해당하는 타입만 가져오려고 한다면...
  type ReturnType<T> = T extends () => string ? string : never;

  type A = ReturnType<Func>;
}

{
  // ##########
  // 개선 전 코드
  // ##########
  type FuncA = () => string;
  type FuncB = () => number;

  type ReturnType<T> = T extends () => string ? string : never;

  type A = ReturnType<FuncA>;

  // 리턴타입을 제대로 가져오지 못하고 있다.
  // 왜냐하면 extends () => string 에서 string 로 고정되어 있기 때문에..
  type B = ReturnType<FuncB>;
}

{
  // ##########
  // 개선 후 코드
  // ##########

  type FuncA = () => string;
  type FuncB = () => number;

  // infer R -> 한 묶음이라고 할 수 있음
  type ReturnType<T> = T extends () => infer R ? R : never;

  type A = ReturnType<FuncA>;

  type B = ReturnType<FuncB>;

  // infer 다음에 오는 type을 추론할 수 없는 경우에는 조건식이 거짓이 됨
  type C = ReturnType<number>;
}

{
  // 구현 요구사항
  // 1. T는 프로미스 타입이어야 한다.
  // 2. 프로미스 타입의 결과값 타입을 반환해야 한다.
  type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;

  type PromiseA = PromiseUnpack<Promise<number>>;
  // number 가 추론

  type PromiseB = PromiseUnpack<Promise<string>>;
  // string 으로 추론
}
