/**
 * 함수 타입의 호환성
 * 특정 함수 타입을 다른 함수 타입으로 취급해도 괜찮은가를 판단하는 것
 *
 * # 체크리스트
 * 1. 반환값의 타입이 호환되는가.
 * 2. 매개변수의 타입이 호환되는가.
 */
{
  // 기준1. 반환값이 호환되는가?
  type A = () => number;
  type B = () => 10;

  let a: A = () => 10; // number 타입
  let b: B = () => 10; // 넘버 리터럴 타입

  a = b;
  b = a; // 다운 캐스팅은 호환 X
}

//
// 기준2. 매개변수가 호환되는가?
{
  // 2-1. 매개변수의 갯수가 같을 때
  type A = (value: number) => void;
  type B = (value: 10) => void;

  let a: A = (a) => {};
  let b: B = (a) => {};

  // ############################################################
  // => 매개변수만을 기준으로 호환성을 판단하는 경우에는
  // => 일반적인 업캐스팅이 안됨
  // ############################################################
  a = b;
  b = a;

  // 슈퍼타입
  type Animal = {
    name: string;
  };

  // 서브타입
  type Dog = {
    name: string;
    color: string;
  };

  let animalFunc = (animal: Animal) => {
    console.log(animal.name);
  };
  let dogFunc = (dog: Dog) => {
    console.log(dog.name);
    console.log(dog.color);
  };

  animalFunc = dogFunc; // 업캐스팅 X
  dogFunc = animalFunc; // 다운캐스팅 O

  // 함수의 매개변수 타입을 업캐스팅으로 할당해 버리면 문제가 생김
  let testFunc = (animal: Animal) => {
    console.log(animal.name);

    // 업캐스팅으로 할당한다고 해도 color 프로퍼티가 없어서 오류 발생
    console.log(animal.color);
  };

  let testFunc2 = (dog: Dog) => {
    //
    console.log(dog.name);
  };
}

{
  // 2-2. 매개변수의 갯수가 다를 때
  type Func1 = (a: number, b: number) => void;
  type Func2 = (a: number) => void;

  let func1: Func1 = (a, b) => {};
  let func2: Func2 = (a) => {};

  // 단, 매개변수의 타입이 같을 경우에만 !!
  func1 = func2; // 매개변수가 적은쪽에서 많은 쪽으로만 할당은 가능
  func2 = func1;
}
