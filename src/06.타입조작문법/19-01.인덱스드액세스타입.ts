/**
 * 타입 조작하기
 * 기본타입이난 별칭 또는 인터페이스로 만든 원래 존재하던
 * 여러가지 타입들을 타입스크립트의 특수한 문법을 이용해서
 * 상황에 따라 각각 다른 타입으로 변환하는 타입스크립트의 톡특한 기능이다.
 * 제네릭도 함수나 인터페이스,별칭,클래스 등에 적용해서
 * 상황에 따라 달라지는 가변적인 타입을 정의할 수 있는 타입조작기능에 포함된다.
 *
 * 1. 제네릭의 함수,인터페이스,별칭,클래스
 * 2. 인덱스드 액세스 타입
 * 3. keyof 연산자
 * 4. Mapped(맵드) 타입
 * 5. 템플릿 리터럴 타입
 * 6. 조건부 타입
 *
 */

/**
 * 인덱스드 액세스 타입
 * 인덱스를 이용해서 다른 타입 내에
 * 특정 프로퍼티의 타입을 추출하는 타입
 */
{
  // 인덱스드 액세스 타입 사용전
  // 개선 전 코드
  interface Post {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
      age: number;
    };
  }

  // 이름과 아이디를 붙여서 출력하는 함수가 있다고 가정..
  function printAuthorInfo(author: { id: 1; name: '김재희' }) {
    console.log(`${author.name}-${author.id}`);
  }

  const post: Post = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
      id: 1,
      name: '김재희',
      age: 40,
    },
  };
}

{
  // 인덱스드 액세스 타입 사용 후..
  // 개선 후 코드

  // 예를 들어 author 프로퍼티에 다른 타입이 추후에 추가되더라도
  // 인덱스드 액세스 타입을 적용하면 추가로 작성하거나 할 필요가 없음
  // 즉, 원본 타입이 수정,추가되더라도 별도로 추가적인 작업을 해주지 않아도 됨

  interface Post {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
      age: number;
    };
  }

  // Post["author"] 여기서 ["author"]는 값이 아니라 타입이라는 점이다 !!!

  // 만약에 아래와 같이 정의한다면 오류가 발생
  const key = 'author';
  // key는 타입이 아니라 변수이자 곧 값이기 때문이다.
  // printAuthorInfo(author: Post[key] => 오류 발생
  // 즉, 인덱스드 액세스는 타입만 명시할 수 있다.
  function printAuthorInfo(author: Post['author']) {
    console.log(`${author.name}-${author.id}`);
  }

  const post: Post = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
      id: 1,
      name: '김재희',
      age: 40,
    },
  };
}

{
  // 중첩 대괄호 사용하기
  interface Post {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
      age: number;
    };
  }

  // id 만 뽑아오고 싶다면... 중첩으로 대괄호 사용
  function printAuthorInfo(id: Post['author']['id']) {
    // id인 number 타입을 뽑아옴
    console.log(`${id}`);
  }
}

{
  // 배열타입으로부터 특정 요소의 타입을 뽑아내기
  // 인터페이스 타입은 객체를 정의하는데 특화되어 있어서
  // 배열 타입을 쉽게 정의하기 위해 type 별칭을 사용

  // PostList를 여러개 저장하는 배열타입 정의 => {}[]
  type PostList = {
    title: string;
    content: string;
    author: {
      id: number;
      name: string;
      age: number;
    };
  }[];

  function printAuthorInfo(author: PostList[number]['author']) {
    console.log(`${author.name}-${author.id}`);
  }

  // ############################################
  // 인덱스드 액세스타입을 이용할 때 대괄호 안에 number 타입을 넣어주면
  // 배열 타입으로부터 하나의 요소의 타입만 가져온다.
  const post: PostList[number] = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
      id: 1,
      name: '김재희',
      age: 40,
    },
  };

  // 숫자를 사용해도 가능(어떤 숫자든 가능)
  const post1: PostList[0] = {
    title: '게시글 제목',
    content: '게시글 본문',
    author: {
      id: 1,
      name: '김재희',
      age: 40,
    },
  };
}

{
  // ######################
  // 인덱스드 액세스 타입과 튜플 함께 사용하기
  type Tup = [number, string, boolean];

  type Tup0 = Tup[0];

  type Tup1 = Tup[1];

  type Tup2 = Tup[2];

  // 배열 타입을 추출할 때처럼 number 타입도 가능
  // number를 작성하면 튜플타입 안에 있는 모든 타입의 최적의 공통 타입을 뽑아온다.
  // 여기서는 string | number | boolean 유니온 타입을 뽑아옴
  type TupNum = Tup[number];
}
