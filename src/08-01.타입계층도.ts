/**
 * 타입 계층도
 * 타입은 집합이다 !!!
 * => 계층도를 통해서 보면 타입은 집합으로 이루어져 있다.
 * => 예를 들어, 음수,양수,무한값, 무한음수값... 등은 number 타입으로 이루어진 집합이다.
 *
 * 슈퍼타입(부모) 서브타입(자식)
 * 슈퍼(Up Cast) => 서브(Donw Cast) (X)
 * 부모(Up Cast) <= 자식(Down Cast) (O)
 *
 * Ex. 직사각형(슈퍼,부모) --- 정사각형(서브,자식)
 */

{
  /**
   * Unknown 타입
   */
  // ## 서브타입이 슈퍼타입으로 업캐스팅에 해당
  let a: unknown = 1;
  let b: unknown = 'hello';
  let c: unknown = true;
  let d: unknown = null;
  let e: unknown = undefined;

  // ## 슈퍼타입이 서브타입으로 할당하려고 하는 다운캐스팅에 해당
  let unknownVar: unknown;
  let num: number = unknownVar; // 다운캐스팅 X
  let str: string = unknownVar; // 다운캐스팅 X
  let bool: boolean = unknownVar; // 다운캐스팅 X

  //
}

{
  /**
   * never 타입
   * 공집합 => 모든 집합에 부분 집합이 되는 것(서로소)
   * 즉, 아무것도 없는 집합
   */

  // 반환할 수 있는 값이 종류가 아무것도 없다 !! never
  function neverFunc(): never {
    while (true) {}
  }

  // never 타입은 모든 타입의 서브타입이기 때문에 할당 가능 !!
  // 업캐스팅 O
  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅 X
  let a: never = 1;
  let b: never = 'hello';
  let c: never = true;
}

{
  /**
   * void 타입
   *
   */

  // void 는 undefined 의 슈퍼타입이다.
  function voidFunc(): void {
    console.log(
      ' let voidVar: void = undefined; 해당 함수는 이 관계랑 같다고 볼수 있다.',
    );
    return undefined;
  }
  let voidVar: void = undefined;
}

{
  /**
   * any 타입
   * 치트키 타입으로 타입 계층도를 무시한다. !!
   * => any 타입은 모든 타입의 슈퍼타입으로도 위치하기도 하고
   * => 모든 타입의 서브타입으로도 위치하기도 한다.
   * 단, never 만 제외
   */

  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar;
  undefinedVar = anyVar;

  // never 타입은 예외
  // 아무리 치트키 any 타입이라고 하더라도 never 타입에는 할당 X
  neverVar = anyVar;
}
