/**
 * 타입 단언 (Type Assertion)
 * -> 타입스크립트가 타입을 추론하지 못하는 경우 타입을 명시적으로 지정해주는 것
 */

{
  type Person = {
    name: string;
    age: number;
  };

  // 상황적으로 빈 객체를 만든 후 동적으로 나중에 프로퍼티를 지정해주어야하는 경우
  // 아래와 같이 작성하면 빈 객체로 추론이 되어버리기 때문에 에러가 발생함
  let person = {};
  person.name = "김재희";
  person.age = 40;

  let person2 = {} as Person; // Person 타입으로 간주해줘 !! 이렇게 하면 타입 추론이 됨
  person2.name = "김재희";
  person2.age = 40;
}

{
  type Dog = {
    name: string;
    color: string;
  };

  // 초기 프로퍼티 검사로 인해 breed 프로퍼티가 없다고 추론되어 에러가 발생하겠지만
  // 타입 단언을 통해 명시적으로 Dog 타입으로 지정해주면 에러가 사라짐
  let dog = {
    name: "토토",
    color: "brown",
    breed: "푸들",
  } as Dog;
}

//

{
  /**
   * 타입 단언의 규칙
   * 값 as 단언 <- 단언식
   * A as B
   * A가 B의 슈퍼타입이거나 서브타입이면 단언 가능
   */

  // 예시
  let num1 = 10 as never; // A가 B의 슈퍼타입: never 타입은 모든 타입의 서브타입이므로 단언 가능
  let num2 = 10 as unknown; // A가 B의 서브타입: unknown 타입은 모든 타입의 슈퍼타입이므로 단언 가능

  // 잘못된 예시
  let num3 = 10 as string; // A가 B의 슈퍼타입이거나 서브타입이 아니기 때문에 단언 불가능

  // 다중 단언(사용 권장 X)
  let num4 = 10 as unknown as string; // 두 번째 단언이 첫 번째 단언의 서브타입이므로 단언 가능
}

//

{
  /**
   * const 단언
   */

  // const 로 선언한 것과 같은 동일한 효과를 내는 단언
  let num = 10 as const;

  // 활용 예시
  // 객체타입에 사용했을 때 활용도가 크다.
  const user = {
    name: "김재희",
    age: 40,
  } as const;

  user.name = ""; // 모든 프로퍼티를 readonly 로 만들 수 있음
}

//

{
  /**
   * Non-null 단언
   */

  type Post = {
    title: string;
    author?: string;
  };

  let post: Post = {
    title: "게시글 제목",
    author: "김재희",
  };

  const len1: number = post.author?.length; // 옵셔널 체이닝에서 undefined 가 반환될 수 있기 때문에 에러 발생
  const len2: number = post.author!.length; // !(non-null 단언) 타입 단언을 통해 타입을 명시적으로 지정해줌
}
