/**
 * void(공허란 의미를 포함하고 있음)
 * -> 아무것도 없음을 의미하는 타입
 */

function func1(): string {
  return 'hello';
}

// 반환하는 값이 아무것도 없음
function func2(): void {
  console.log('hello');
}

let a: void;
a = 1;
a = {};
a = 'hello';
// a는 아무것도 없음이라고 정의되어 있기 때문에 어떤 값도 담을 수 없다.

//
a = null; // 단, "strictNullChecks": false, 로 되어 있으면 할당 가능
// null 이 어느 타입에도 넣을 수 있도록 설정하는 것이기 때문..

a = undefined;

// ########################################################
// ## null 이나 undefined 와 같은 아무것도 없음을 나타내는 타입이 있는데
// 왜 void 타입이 있는 것일까???

function func3(): undefined {
  console.log('왜 void가 필요한 것인가?');

  // return; // 또는
  return undefined; // 이렇게 반환해줘야하기 때문에..
}

function func4(): null {
  console.log('무조건 null 을 반환해줘야 한다.');
  return null;
  // return 문을 사용하고 싶지 않거나 필요없는 함수에서는 void 를 사용해야 한다.
}

//
// =========================================================
/**
 * never 타입
 * -> 존재하지 않는,
 * 불가능한 타입
 */
function funcNever(): never {
  while (true) {}
  // 무한 루프와 같이 반환자체를 할 수 없는 상황(void 는 반환문 자체가 없지만..)
  // 애초에 함수자체를 종료할 수가 없음
  // 반환하는 것 자체가 모순이고 불가능할 때

  // ## 반환값 자체가 있는 것이 모순이다라고 할 수 있는 경우에 사용
}

// 이 함수가 실행되면
// throw new Error() 로 인해 실행이 바로 중지될 것이기 때문에
// never 를 정의하는 것이 적합하다.
function func10(): never {
  throw new Error();
}

let b: never;
b = 1;
b = 'hello';
b = () => {};

// void 는 undefined, null 은 담을 수 있었지만
// never 타입은 이 두가지 값도 담을 수 없다.
b = undefined;
b = null;

let anyVar: any;
b = anyVar; // 어떤 값에도 가능한 any 타입조차도 담을 수 없다.
