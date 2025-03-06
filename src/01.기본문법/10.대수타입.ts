/**
 * 대수 타입
 * -> 여러 개의 타입을 합성해서 새로운 타입을 만드는 것
 * -> 합집합 타입과 교집합 타입이 존재
 */

{
  /**
   * 1. 합집합
   * -> Union Type
   */

  // 문자집합과 숫자집합(음수,양수,정수,무한대...)의 합집합
  let a: string | number;
  a = 1;
  a = "hello";

  let b: boolean | number;
  b = true;
  b = 1;

  let arr: (string | number | boolean)[] = [1, "hello", true];

  // 객체 타입의 합집합(유니온 타입)
  type Dog = {
    name: string;
    color: string;
  };

  type Person = {
    name: string;
    language: string;
  };

  type Union1 = Dog | Person;

  let union1: Union1 = {
    name: "dog",
    color: "white",
  };

  let union2: Union1 = {
    name: "person",
    language: "korean",
  };

  let union3: Union1 = {
    name: "person",
    language: "korean",
    color: "white",
  };

  // 공통적으로 가지고 있는 name 하나만 작성했더니 오류가 발생함 !!!
  let union4: Union1 = {
    name: "person",
  };

  // Dog 는 name, color
  // Person 은 name, language
  // 교집합은 name, color, language

  // 위의 union4 는 name 만 가지고 있는 집합이 없으므로 오류가 발생함
  // ### 즉, 유니온 타입은 집합으로 이해하면 쉽다.
}

//

{
  // ==========================================================================
  /**
   * 2. 교집합(Intersection Type)
   * -> 객체에서 모든 요소를 포함하는 것이 교집합 타입
   */
  let variable: string & number;
  // variable 은 마우스커스를 올렸을 때 타입 추론으로 never 로 추론됨
  // 문자집합과 숫자집합의 교집합이 없으므로 공집합이 되어 never 로 추론됨

  // # 보통 기본 타입간에 교집합은 never 이기 때문에 교집합을 구할 일이 없고
  // # 객체 타입간에 교집합을 사용하는 것이 일반적이다.

  type Dog = {
    name: string;
    color: string;
  };

  type Person = {
    name: string;
    language: string;
  };

  type Intersection1 = Dog & Person;

  let intersection1: Intersection1 = {
    name: "dog",
    color: "white",
    language: "korean",
  };
}
