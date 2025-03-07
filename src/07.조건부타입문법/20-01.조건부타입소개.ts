/**
 * 조건부 타입
 * 자바스크립트의 삼항 연산자처럼
 * 조건에 따라서 타입을 정의하는 독특한 문법
 */

{
  // number 타입이 string 타입을 확장하는가? 참이라면 string, 거짓이라면 number
  type A = number extends string ? string : number;

  // 다른 예제
  type ObjA = {
    a: number;
  };

  type ObjB = {
    a: number;
    b: number;
  };

  type B = ObjB extends ObjA ? number : string;
}

{
  /**
   * 제네릭과 함께 조건부 타입을 사용할 때 유용
   * 제네릭과 조건부 타입 예제1
   */

  type StringNumberSwitch<T> = T extends number ? string : number;

  let varA: StringNumberSwitch<number>;

  let varB: StringNumberSwitch<string>;
}

{
  // 제네릭과 조건부 타입 예제2

  // 개선전 코도
  function removeSpace(text: string | undefined | null) {
    if (typeof text === "string") {
      return text.replaceAll(" ", "");
    } else {
      return undefined;
    }
  }

  let result = removeSpace("hi im jaehee");

  // 타입 좁히기를 해서 함수내 오류가 발생하지 않더라도...
  // result 타입이 string 이거나 undefined 타입이기 때문에 오류 발생
  result.toUpperCase();

  {
    // #############
    // 1차 개선 후 코도
    // #############

    // 조건에 따라 반환값의 타입을 변경 가능
    function removeSpace<T>(text: T): T extends string ? string : undefined {
      // 함수 내부에서 T는 전달받기 전까지는 T가 몬지 모르기 때문에 unknown 타입으로 되어 있게 된다.
      // 그래서 any로 타입 단언
      if (typeof text === "string") {
        return text.replaceAll(" ", "") as any;
      } else {
        return undefined as any;
      }
    }

    let result = removeSpace("hi im jaehee");
    result.toUpperCase();
  }

  {
    // #############
    // 2차 개선 후 코도
    // #############

    // 오버로드 시그니처 구현
    function removeSpace<T>(text: T): T extends string ? string : undefined;

    // 구현 시그니처
    // 즉, 오버로드 시그니처로 인해 구현부에서 타입 추론이 가능해진다.
    function removeSpace(text: any) {
      if (typeof text === "string") {
        return text.replaceAll(" ", "");
      } else {
        return undefined;
      }
    }

    let result = removeSpace("hi im jaehee");
    result.toUpperCase();
  }
}
