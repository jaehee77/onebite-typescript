/**
 * 분산적인 조건부 타입(Distributive Conditional Types)
 * 조건부 타입을 유니온 타입과 함께 사용할 때
 * 조건부 타입이 분산적으로 동작하게 업그레이드되는 기능(문법)
 */

{
  type StringNumberSwitch<T> = T extends number ? string : number;

  let a: StringNumberSwitch<number>;
  let b: StringNumberSwitch<string>;

  // 조건부 타입에 유니온 타입을 할당하면
  // 일반적인 조건부 타입이 아니라 분산적인 조건부 타입이 적용된다.
  // 유니온 타입이 한꺼번에 넘겨지는게 아니라 한번은 number
  // 한번은 string으로 분리되어서 할당되어 조건을 적용한다.
  // 즉, StringNumberSwitch<number>,StringNumberSwitch<string> 이렇게 조건을 검사하고
  // 조건 검사한 타입을 유니온 타입으로 묶어주게 된다.
  let c: StringNumberSwitch<number | string>;

  let d: StringNumberSwitch<boolean | number | string>;
  // 1 단계
  // StringNumberSwitch<boolean>;
  // StringNumberSwitch<number>;
  // StringNumberSwitch<string>;

  // 2단계
  // number
  // string
  // number

  // 결과
  // number | string
}

// #############################################################

{
  // 실용 예제

  type Exclude<T, U> = T extends U ? never : T;

  type A = Exclude<number | string | boolean, string>;
  // 1단계
  // Exclude<number, string>
  // Exclude<string, string>
  // Exclude<boolean, string>

  // 2단계
  // number |
  // never |
  // boolean

  // 결과
  // 유니언 타입은 타입들 간의 합집합을 만드는 것이기 때문에
  // never 타입은 공집합이기에 네버라는 공집합을 합집합하면
  // 결국 네버라는 집합이 되므로 never 이 사라진다.
  // number | nerver | boolean

  // 최종 결과
  // number | boolean
}

{
  // ##############
  // 추출하는 타입
  type Extract<T, U> = T extends U ? T : never;

  type B = Extract<number | string | boolean, string>;
}

//

{
  /**
   * ################
   * 분산을 방지하는 방법
   * ################
   */

  // [] 대괄호를 사용하여 분산을 방지할 수 있다.
  type StringNumberSwitch<T> = [T] extends [number] ? string : number;

  type A = StringNumberSwitch<number | string | boolean>;
}
