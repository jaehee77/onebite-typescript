/**
 * 조건부 타입 기반의 유틸리티 타입들
 * Exclude<T, U>
 * Extract<T, U>
 * ReturnType<T>
 */

{
  /**
   * ###########
   * Exclude<T, U>
   * -> 제외하다, 추방하다.
   * -> T에서 U를 제거하는 타입
   * ###########
   */

  type A = Exclude<string | boolean, boolean>;

  {
    // custom Exclude 만들어보기
    type ExcludeCustom<T, U> = T extends U ? never : T;

    type B = ExcludeCustom<number | string, string>;
  }
}

// ===========================================================================

{
  /**
   * ###########
   * Extract<T, U>
   * -> T에서 U를 추출하는 타입
   * ###########
   */
  type A = Extract<string | boolean, boolean>;

  {
    type ExtractCustom<T, U> = T extends U ? T : never;
  }
}

// ===========================================================================

{
  /**
   * ###########
   * ReturnType<T>
   * -> 함수의 반환값 타입을 추출하는 타입
   * ###########
   */

  function funcA() {
    return "hello";
  }

  function funcB() {
    return 10;
  }

  type ReturnA = ReturnType<typeof funcA>;

  type ReturnB = ReturnType<typeof funcB>;

  {
    // custom Returntype 만들어보기
    
  }
}
