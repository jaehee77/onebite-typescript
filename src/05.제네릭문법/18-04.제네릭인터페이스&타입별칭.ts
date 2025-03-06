/**
 * 제네릭 인터페이스
 */

{
  interface KeyPair<K, V> {
    key: K;
    value: V;
  }

  // 제네릭 인터페이스는 제네릭 함수와는 다르게
  // 타입 변수를 <> 할당해 주어야 한다 !!!
  // 즉, <>함께 정의해 주어야 한다.
  let keyPair: KeyPair<string, number> = {
    key: "jaehee",
    value: 40,
  };

  let keyPair2: KeyPair<boolean, string[]> = {
    key: false,
    value: ["제네릭 인터페이스"],
  };
}

{
  /**
   * 제네릭 인터페이스는 객체의 인덱스 시그니처 문법과 함께 사용하면 활용도가 좋다 !!
   */

  // 인덱스 시그니처
  // 프로퍼티에 키와 밸류에 타입에 규칙만 만족하면
  // 어떤 객체든 허용하여 만들 수 있는 유용한 타입을 만드는 문법
  interface NumberMap {
    [key: string]: number;
  }

  let numberMap: NumberMap = {
    a: -1234,
    b: 123,
  };

  // 제네릭 인터페이스와 인덱스 시그니처 함께 사용
  // 하나의 타입으로 다양한 타입의 객체를 생성할 수 있음
  interface Map<V> {
    [key: string]: V;
  }

  let stringMap: Map<string> = {
    a: "hello",
    b: "hi",
  };

  let booleanMap: Map<boolean> = {
    a: true,
    b: false,
  };
}

// #########################################################################

{
  /**
   * 제네릭 타입 별칭
   */

  type Map<V> = {
    [key: string]: V;
  };

  let stringMap: Map<string> = {
    a: "jaehee",
  };
}

// #########################################################################

{
  /**
   * 제네릭 인터페이스의 활용 예시
   * -> 유저 관리 프로그램
   * -> 유저 구분 : 학생 유저 / 개발자 유저
   */

  // ###########
  // 개선 전 코드
  // ###########
  interface Student {
    type: "student";
    schcool: string;
  }

  interface Developer {
    type: "developer";
    skill: string;
  }

  interface User {
    name: string;
    profile: Student | Developer;
  }

  // 학생 유저가 들어올 경우에 처리하도록 하는 함수..
  // 만약 특정회원만 이용해야 하는 회원이 많아진다면 특정회원을 처리하는 함수가 많아지고
  // 그리고 타입 좁히기도 계속 추가해주어야 하는 번거로움이 발생할 수 있다.
  function goToSchool(user: User) {
    if (user.profile.type !== "student") {
      console.log("잘 못 오셨습니다.");
      return;
    }
    const schcool = user.profile.schcool;
    console.log(`${schcool}로 등교 완료`);
  }

  const developerUser: User = {
    name: "jaehee",
    profile: {
      type: "developer",
      skill: "타입스크립트",
    },
  };

  const studentUser: User = {
    name: "홍길동",
    profile: {
      type: "student",
      schcool: "성남고등학교",
    },
  };
}

{
  // #################################
  // 개선 후 코드
  // 제네릭 인터페이스를 사용하여 개선
  // #################################
  interface Student {
    type: "student";
    schcool: string;
  }

  interface Developer {
    type: "developer";
    skill: string;
  }

  interface User<T> {
    name: string;
    profile: T;
  }

  function goToSchool(user: User<Student>) {
    // 타입 좁히기가 필요 없어짐
    // if (user.profile.type !== "student") {
    //   console.log("잘 못 오셨습니다.");
    //   return;
    // }
    const schcool = user.profile.schcool;
    console.log(`${schcool}로 등교 완료`);
  }

  const developerUser: User<Developer> = {
    name: "jaehee",
    profile: {
      type: "developer",
      skill: "타입스크립트",
    },
  };

  const studentUser: User<Student> = {
    name: "홍길동",
    profile: {
      type: "student",
      schcool: "성남고등학교",
    },
  };

  goToSchool(developerUser); //goToSchool(user: User<Student>) 이기 때문에 오류 발생
  goToSchool(studentUser);
}
