/**
 * 제네릭 활용 사례
 */

// ###############################################################################
{
  // 첫 번째 사례
  // 잘못된 코드
  function swap<T>(a: T, b: T) {
    return [b, a];
  }

  const [a, b] = swap("1", 2);
  // (a: T, b: T)에서 a:T 로 string 타입이 할당되니까
  // b:T에도 string타입으로 할당되어 오류가 발생
}
{
  // 첫 번째 사례
  // 개선된 코드
  function swap<T, U>(a: T, b: U) {
    return [b, a];
  }

  const [a, b] = swap("1", 2);
}

// ###############################################################################

{
  // 두 번째 사례

  // 함수를 호출하기 전까지는 T에 담길 타입변수를 몰라서 data[0] 에서 오류 발생
  // 담길 타입 변수를 몰라서 unknown 으로 일단 추론하게됨
  function returnFirstValue<T>(data: T) {
    return data[0];
  }

  let num = returnFirstValue([0, 1, 2]);

  let str = returnFirstValue(["hello", "jaehee"]);

  //
  //
  // 아직 담길 타입 변수를 모르지만 그래도 T[](T배열타입)이라고 정의해줌
  // 즉, unknown 배열타입으로 추론됨 : unknown[]
  function returnFirstValue1<T>(data: T[]) {
    return data[0];
  }

  // number 타입으로 잘 추론됨
  let num1 = returnFirstValue1([1, 2, 3]);

  // string | number 유니온 타입으로 추론되고 있음
  // T => (number | string)[] 으로 추론되는 이유는
  // 타입스크립트는 첫 번째 요소가 number 인지 string 인지 모르기 때문에 number | string 으로 추론하고 있음
  let str1 = returnFirstValue1([1, "hello", "jaehee"]);

  //
  //
  // 하지만 첫번째 요소를 어떤 값을 전달하든 그 값의 타입으로 추론되기를 원한다면..
  // 튜플 타입을 사용해 볼 수 있다.
  // [T, ...unknown[]]
  // 첫번째 값 추론만 원하는 코드이기 때문에 T 다음에 값들은 몰라도 되니까 rest 문법을 사용
  function returnFirstValue2<T>(data: [T, ...unknown[]]) {
    return data[0];
  }

  // number 타입으로 추론됨
  let num2 = returnFirstValue2([1, "hello", "jaehee"]);
}

// ###############################################################################

{
  // 세 번째 사례
  // 타입 변수에 조건을 달아 제한하는 방법
 
  // 예제코드 : lengh 가 있는 값들만 출력하는 코드
  function getLength<T>(data: T) {
    // T가 unknown 으로 추론되기 때문에 lengh 프로퍼티를 몰라서 오류 발생
    return data.length;
  }

  let var1 = getLength([1, 2, 3]);

  let var2 = getLength("jaehee");

  let var3 = getLength({ lengh: 10 });

  // 아래 코드는 에러가 발생해야함..
  let var4 = getLength(10);

  //
  {
    // T를 {length: number}로 제한하도록 함
    // <T extends { length: number }>
    // 즉, T는 확장하는 타입인데..
    // number타입의 length를 가지고 있는 객체를 확장하는 타입으로 T를 제한하는 것임
    function getLength<T extends { length: number }>(data: T) {
      return data.length;
    }

    let var1 = getLength([1, 2, 3]);

    let var2 = getLength("jaehee");

    let var3 = getLength({ length: 10 });

    // 아래 코드는 에러가 발생해야함..
    let var4 = getLength(10);

    // <T extends { length: number }> 는 아래와 같다고 볼 수 있다.
    interface interfaceA {
      length: number;
    }
    // interfaceB 는 무조건 length라는 프로프티 타입을 가져야만 한다.
    interface interfaceB extends interfaceA {}
  }
}
