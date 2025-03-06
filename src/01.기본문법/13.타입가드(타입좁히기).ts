/**
 * 타입 좁히기(type narrowing)
 * 조건문(타입가드) 등을 이용해 넓은 타입에서 좁은 타입으로
 * 타입을 상황에 따라 좁히는 방법을 말한다.
 * 타입 좁히기는 좁히기를 도와주는 타입가드(조건문..)를 사용한다.
 */

{
  // value => number: toFixed
  // value => string : toUpperCase
  function func(value: number | string) {
    if (typeof value === "number") {
      // 이 조건문의 typeof 같은 것을 타입 가드라고 한다.
      console.log(value.toFixed());
    } else if (typeof value === "string") {
      console.log(value.toUpperCase());
    }
  }

  function func2(value: string | number) {
    if (typeof value === "number") {
      return value.toFixed();
    }
    return value.toUpperCase();
  }
}

//

{
  type Person = {
    name: string;
    age: number;
  };
  //
  // value => number: toFixed
  // value => string : toUpperCase
  // value => Date : getTime
  // value => Person : name은 age 살입니다.

  function func(value: number | string | Date | Person | null) {
    if (typeof value === "number") {
      console.log(value.toFixed());
    } else if (typeof value === "string") {
      console.log(value.toUpperCase());
    } else if (value instanceof Date) {
      // instanceof 연산자를 타입 가드로 사용함
      console.log(value.getTime());
    } else if (value && "age" in value) {
      // value && => value 가 null 이 아님을 확실하게 하기 위함
      console.log(`${value.name}은 ${value.age}살입니다.`);
    }
  }
}
