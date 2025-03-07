/**
 * 맵드 타입
 * -> 객체 타입을 조작하는 기능
 * -> type 별칭에서만 사용 O
 * -> 인터페이스에서 사용 X
 */

{
  interface User {
    id: number;
    name: string;
    age: number;
  }

  // 맵드 타입은 type 별칭으로만 정의할 수 있다 !!!
  // 인덱스 시그니처와 결합하여 사용
  type PartialUser = {
    [key in keyof User]?: User[key];
  };

  // 또 다른 예제
  type BooleanUser = {
    readonly [key in keyof User]: boolean;
  };

  // 서버로부터 데이터를 불러온다고 가정..
  // 한명의 유저 정보를 불러오는 함수
  function fetchUser(): User {
    // 기능.. 블라블라..
    return {
      id: 1,
      name: "김재희",
      age: 40,
    };
  }

  // 한 명의 유저 정보를 수정하는 기능
  function updateUser(user: PartialUser) {
    // 수정하는 기능...
  }

  // age의 값만 전달하고 싶을 때...
  updateUser({
    // id: 1,
    // name: "김재희",
    age: 7,
  });
}

// ################################################################################

/**
 * 템플릿 리터럴 타입
 * string 리터럴 타입들을 기반으로 특정 패턴을 갖는
 * 문자열 타입들을 만드는 기능
 */
{
  type Color = "red" | "black" | "greean";

  type Animal = "dog" | "cat" | "chicken";

  // type ColoredAnimal = 'red-dog' | 'red-cat' | 'red-chicken' | 'black-dog' ...

  type ColoredAnimal = `${Color}-${Animal}`;

  // 코드 힌트로 사용할 수 있는 타입조합들이 나온다..
  const coloredAnimal: ColoredAnimal = "black-cat";
}
