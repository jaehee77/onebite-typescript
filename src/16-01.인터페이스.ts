/**
 * 인터페이스(interface)
 * -> 타입에 이름을 지어주는 또 다른 문법
 * => 특히, 객체의 구조를 정의하는데 특화된 문법
 * => 상속, 합침 등의 특수한 기능을 제공함
 */

interface Person {
  readonly name: string;
  age: number;
  location?: string;
  sayHi: () => void;
  // 또 다른 함수 타입 선언 방식인 호출 시그니처
  sayHi2(): void;
}

const person: Person = {
  name: "김재희",
  age: 40,
  sayHi: () => {
    console.log("안녕하세요");
  },
  sayHi2: () => {
    console.log("안녕하세요");
  },
};

person.name = "김재희2"; // 읽기 전용 프로퍼티이기 때문에 오류 발생

{
  /**
   * 인터페이스에서 함수오버로딩은 호출 시그니처를 이용해야한다!!!
   */
  interface Person {
    sayHi(): void;
    sayHi(a: number): void;
    sayHi(a: number, b: number): void;
  }

  // 인터페이스랑 바로 유니온(합집합), 인터섹션(교집합) 타입 선언은 오류 발생
  // 아래와 같이 사용은 가능
  type Type1 = number | string | Person;

  // 함수타입 표현식으로 함수 오버로딩은 오류 발생
  interface Person2 {
    sayHi: () => void;
    sayHi: (a: number) => void;
  }

  const person: Person | Type1 = {
    sayHi: () => {
      console.log("안녕하세요");
    },
  };

  person.sayHi();
  person.sayHi(1);
  person.sayHi(1, 2);
}

{
  // 헝가리안 표기법 (I와 같은 대문자를 붙이는 방식)
  interface IPerson {
    strName: string;
    numAge: number;
  }

  /**
   * **헝가리안 표기법(Hungarian Notation)**은
   * 변수나 함수의 이름 앞에 해당 변수의 타입이나 용도를 나타내는
   * 접두사를 붙여서 변수 이름을 지정하는 표기법입니다.
   * 이 표기법은 주로 변수의 타입이나 용도를 쉽게 알 수 있도록 돕기 위해 사용됩니다.
   * 헝가리안 표기법의 핵심은 타입을 명시적으로 표시하는 것
   */

  // int 타입 변수를 n으로 시작:
  // nAge, nCount (정수형 타입을 의미)

  // int nAge;         // 정수형 변수
  // string strName;   // 문자열 변수
  // bool bIsActive;   // 불리언 변수
  // int* pNode;       // 포인터 변수
}
