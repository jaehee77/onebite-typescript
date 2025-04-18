{
  /**
   * 일반 함수 타입 정의
   */

  // 함수를 설명하는 가장 좋은 방법
  // 자바스크립트 관점 : 어떤 매개변수를 받고, 어떤 결과값(반환값)을 반환하는지 설명
  // 타입스크립트 관점 : 어떤 [타입의] 매개변수를 받고, 어떤 [타입의] 결과값을 반환하는지 설명
  // 만약 타입으로 리턴값을 정의하지 않는다면 함수내의 리턴문을 기준으로 타입추론하게됨
  function func(a: number, b: number) {
    return a + b;
  }

  function func2(a: number, b: number): number {
    return a + b;
  }
}

{
  /**
   * 화살표 함수의 타입을 정의하는 방법
   */

  const add = (a: number, b: number): number => a + b;
}

{
  /**
   * 함수의 매개변수에 타입을 정의하는 방식
   * 선택적 매개변수는 함수의 필수 매개변수 뒤에 위치해야 한다.
   */

  function introduce(name = '김재희', age?: number) {
    console.log(`name: ${name}`);
    if (typeof age === 'number') {
      console.log(`age: ${age}`);
    }
  }

  introduce('김재희', 20);
  introduce('김재희'); // age 를 생략하고 싶다면 함수의 매개변수에 옵셔널 매개변수(선택적 매개변수)를 사용

  function getSum(...rest: number[]) {
    // return rest.reduce((acc, cur) => acc + cur, 0);

    let sum = 0;
    rest.forEach((num) => (sum += num));

    return sum;
  }
  getSum(1, 2, 3);
  getSum(1, 2, 3, 4, 5);

  function getSum2(...rest: [number, number, number]) {
    // return rest.reduce((acc, cur) => acc + cur, 0);

    let sum = 0;
    rest.forEach((num) => (sum += num));

    return sum;
  }
  getSum2(1, 2, 3);
  getSum2(1, 2, 3, 4, 5); // 갯수 제한
}
