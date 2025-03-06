/**
 * map 메소드
 */

{
  //
  const arr = [1, 2, 3];
  arr.map((item) => item * 2);
}

{
  // map 타입 직접 정의해 보기
  const arr = [1, 2, 3];
  function map<T>(arr: T[], callback: (item: T) => T) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i]));
    }

    return result;
  }

  // 요구사항
  // 1. [요소,요소,요소] 를 넘기고
  // 2. 요소 하나하나를 순회하면서 처리
  map(arr, (item) => item * 2);
  map(["hi", "jaehee"], (item) => item.toUpperCase());

  // 오류 발생 반환값이 T로 정의되어 있기 때문에
  // 모든 타입의 배열이 반환되도록 해야함.
  map(["hi", "jaehee"], (item) => parseInt(item));

  //
  {
    // ####################
    // 개선된 코드
    function map<T, U>(arr: T[], callback: (item: T) => U) {
      let result = [];
      for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
      }

      return result;
    }

    map([1, 2, 3], (item) => item * 2);

    // parseInt(item) 를 호출할 때 반환타입에 정의된 U에 전달되어 number 타입으로 추론됨
    map(["hi", "jaehee"], (item) => parseInt(item));
  }
}

// ###########################################################################

const arr = [1, 2, 3];
// for문과 유사(순회만 하고 반환값이 없음)
arr.forEach((it) => console.log(it));
{
  // forEach 메소드
  function forEach<T>(arr: T[], callback: (item: T) => void) {
    for (let i = 0; i < arr.length; i++) {
      console.log(callback(arr[i]));
    }
  }

  forEach([1, 2, 3], (item) => item.toFixed());

  console.log("=================================================");
  forEach(["hi", "jaehee"], (item) => parseInt(item));

  forEach(["1,", "2"], (it) => it);

  //
}
