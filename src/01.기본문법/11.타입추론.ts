/**
 * 타입 추론
 * -> 타입을 명시적으로 지정하지 않으면 타입 추론을 함
 * -> 타입스크립트가 타입을 추론하는 방법은 초기화된 값을 보고 타입을 추론함
 * #### 명시적으로 any 타입을 지정하면 암묵적인 진화가 일어나지 않음 ####
 */

{
  let a = 10;

  let b = {
    id: 1,
    name: "김재희",
    profile: {
      age: 20,
      gender: "male",
    },
    url: "https://google.com",
  };

  let { id, name, profile } = b;
  // 마우스커스를 올렸을 때 타입 추론이 잘 되는 것을 확인할 수 있음

  // !!! 예외 !!!
  function func(param) {} // 함수에 매개변수는 타입을 추론할 수 없음

  let [one, two, three] = [1, "hello", true];

  // 함수
  function func(msg = "hello") {
    // 매개변수에 초기값이 있다면 추론됨
    return "hello";
  }
  // 함수의 반환값이 정의되어 있다면 그 값을 통해 타입을 추론함

  /**
   * any 타입의 진화
   * 암묵적인 any 타입의 진화
   * -> 초기값을 정의하지 않으면 any 타입으로 추론됨
   */
  let d;
  d = 10;

  // 아래 라인에서는 number 타입으로 추론됨
  d.toFixed(); // 여기서부터 number 타입으로 진화

  // 문자열로
  d = "hello";

  // 아래 라인에서는 string 타입으로 추론됨
  d.toUpperCase(); // 여기서부터 string 타입으로 진화

  // #### 명시적으로 any 타입을 지정하면 암묵적인 진화가 일어나지 않음 ####
}

{
  /**
   * 상수에 할당된 타입 추론
   */

  //기본 타입 : const 키워드로 선언된 변수는 타입 추론이 일어나지 않음
  // 어차피 상수이기 때문에 초기값 이외에는 다른 값을 담을 일이 없음
  const num = 10; // 기본인 숫자 리터럴 타입으로 추론된 상태임
  const str = "hello";

  // 객체의 경우 const 키워드라도 타입 추론이 일어남
  const arr = [1, "hello"];

  const obj = {
    id: 1,
    name: "김재희",
  };
}
