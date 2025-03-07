/**
 * keyof 연산자
 * 특정 객체 타입으로부터 프로퍼티 키들을
 * 유니온 스트링 타입으로 추출하는 문법
 */

{
  // keyof 연산자를 사용하기 전 코드
  // 개선 전 코드
  interface Person {
    name: string;
    age: number;
  }

  // key: string로 인해 return person[key]; 에서 오류 발생
  // 왜냐하면 모든 문자열값이 이 person 객체의 key 라고 볼 수 없기 때문이다.
  // 예를 들어 getPropertyKey(person, "name2");
  // name2라는 값을 넘겨줬을 때 key: string 은 괜찮지만..
  // 이 코드에선 person[key]; name2 프로퍼티가 없기 때문에 오류가 발생하는 것이다.

  // 잘못된 방법 1.
  // function getPropertyKey(person: Person, key: string) {
  //   return person[key];
  // }

  // 잘못된 방법 2
  // 이 코드에선 name, age 처럼 person 객체의 프로퍼티가 2개밖에 없지만..
  // 이 객체의 프로퍼티가 더 많아질 경우에는 유니온 타입을 계속 작성하는 것을 비효율적이다.
  function getPropertyKey(person: Person, key: "name" | "age") {
    return person[key];
  }

  const person: Person = {
    name: "김재희",
    age: 40,
  };

  getPropertyKey(person, "name");
}

// #########################################################################

{
  // keyof 연산자 사용 코드
  // 개선 후 코드
  interface Person {
    name: string;
    age: number;
  }

  // keyof 연산자를 사용하면 객체타입의 프로퍼티의 키들을 유니온 타입으로 추출해 낼 수 있다.
  // ###########
  // 단, 주의할 점은 keyof 뒤에 작성할 수 있는 것은 무조건 타입만 사용할 수 있다.
  // keyof person 처럼 타입이 아닌 객체를 작성하면 오류 발생
  function getPropertyKey(person: Person, key: keyof Person) {
    return person[key];
  }

  const person: Person = {
    name: "김재희",
    age: 40,
  };

  getPropertyKey(person, "age");
}

// #########################################################################

{
  /**
   * keyof 연산자는 typeof 연산자와 함께 사용 가능하다.
   * ##########
   * typeof 연산자는 타입스크립트에서
   * 특별히 타입을 정의할 때 사용하면 동작이 바뀐다.
   *
   * => 변수에 할당된 객체의 타입을 추론해서 타입 별칭에 정의가 가능
   */

  // 변수에 할당된 객체를 타입 추론하여 타입을 만들어준다.
  type Person = typeof person; // 변수 person

  function getPropertyKey(person: Person, key: keyof typeof person) {
    return person[key];
  }

  const person = {
    name: "김재희",
    age: 40,
  };

  getPropertyKey(person, "age");
}
