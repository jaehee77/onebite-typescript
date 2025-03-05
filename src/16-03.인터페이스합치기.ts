/**
 * 인터페이스의 선언 합침
 */

{
  // type 은 같은 것을 선언(정의)하면 오류가 발생 !!

  type Person = {
    name: string;
  };
  type Person = {
    age: number;
  };
}

{
  // 동일한 인터페이스로 정의한 것은 모두 합쳐진다.
  // 동일한 이름으로 중복선언 가능
  // -> 선언 합침
  interface Person {
    name: string;
  }
  interface Person {
    // name: '토토'; // 같은 타입 프로퍼티를 중복 정의할 수 없다.(다른타입, 서브타입 모두 중복 정의 X)
    name: string;
    age: number;
  }

  // 선언 합침과 인터페이스 상속에서 타입 재정의하는 것은 다름
  interface Man extends Person {
    name: '김재희';
    age: number;
  }
}

// ############################################################
// 일반적으로 선언 합침은 라이브러리의 모듈
// 라이브러리의 타입이 부실한 경우에 사용자 정의한 타입을 추가하는 경우에 사용
// 일종의 모듈 보강 차원에서 사용
// ############################################################

/**
 * 모듈 보강
 */

// 라이브러리 코드가 다음과 같다면..
interface Lib {
  a: number;
  b: number;
}

// 사용자 정의하여 선언 합침한 Lib
interface Lib {
  c: string;
}

let lib: Lib = {
  a: 1,
  b: 2,
  c: 'hello',
  d: true; // d 가 없다면 선언 합침으로 모듈 보강을 추가적으로 해주면 됨
};
