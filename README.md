### 타입스크립트 설치

```bash
npm init
npm i @types/node

npm i -g tsx

tsc --init // tsconfig.json 초기 생성

# src/index.ts 파일에 콘솔 출력 테스트
# 터미널에서 아래 명령어를 실행하면 노드 환경에서 ts 파일을 실행하여 자바스크립트를 실행할 수 있음
tsx src/index.ts
```

<br>

---

### 다차원 배열

```tsx
let doubleArr: (number | boolean)[][] = [
  [1, 2],
  [4, false],
];
```

<br>

---

### 튜플

- 길이와 타입이 고정된 배열

```tsx
let tupple1: [number, number] = [1, 2];
let tupple2: [string, boolean, number] = ['hello', false, 7];

const users: [string, number][] = [
  ['김아무개', 1],
  ['이아무개', 2],
  ['최아무개', 3],
];
```

<br>

---

### 객체

- 구조를 기반으로 타입을 정한다고 하여 구조적 타입 시스템이라고 한다.

```tsx
// 객체 리터럴 타입
let user: {
  id: number;
  name: string;
  opt?: true;
  readonly apiKey: string;
} = {
  id: 1,
  name: '김재희',
};

user.id;
user = {
  id: 2,
  name: '아무개',
};
```

<br>

---

### 타입별칭

- 타입을 변수처럼 사용할 수 있음

```tsx
type User = {
  id: number;
  name: string;
  birth: string;
};

const user: User = {
  id: 2,
  name: '홍길동',
  birth: '1990.04.01',
};
```

<br>

---

### 인덱스 시그니처

- 객체타입의 정의를 좀더 유연하게 도와준다.
- key: value 의 규칙을 기준으로 객체의 타입을 정의
- 객체에 동적으로 키를 추가할 수 있을 때, 해당 키의 타입과 값의 타입을 정의하는 문법

```tsx
type CountryCodes = {
  [key: string]: string;
};
let countryCodes: CountryCodes = {
  korea: 'Ko',
  unitedState: 'us',
  unitedKingdom: 'uk',
};

// ===============

type CountryNumberCodes = {
  [key: string]: number;
};
let countryNumberCodes: CountryNumberCodes = {
  korea: 410,
  unitedState: 840,
  unitedKingdom: 826,
};

// 유니언 타입을 사용한 인덱스 시그니처
type Code = {
  [key: string]: string | number;
};

// 명시적인 키 vs 인덱스 시그니처 분리
type Code2 = {
  fixedKey: string; // 명시적 키
  [key: string]: string; // 그 외 키들
};
```

<br>

---

### 열거형 타입(Enumerable Type)

- 여러가지 값들에 각각 이름을 부여하고 열거해 두고 사용하는 타입

```tsx
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}
// 숫자 할당을 하지 않아도 0번부터 자동으로 할당된다 !!!
// 그리고 첫 값에 10을 할당하면 차례대로 10, 11, 12.. 가 할당

enum Language {
  korea = 'ko',
  english = 'en',
}
// enum 을 활용하면 실수를 줄일 수 있다.

const user1 = {
  name: '김재희',
  // role: 0, // 0 <- 관리자
  role: Role.ADMIN,
  language: Language.korea,
};

const user2 = {
  name: '홍길동',
  // role: 1, // 1 <- 일반 유저
  role: Role.USER,
  language: Language.english,
};

const user3 = {
  name: '아무개',
  // role: 2, // 2 <- 게스트
  role: Role.GUEST,
};

console.log(user1, user2, user3);
```

<br>

---

### 타입은 집합이다.(타입 계층도)

![타입 계층도](type01.png)

![타입 계층도](type02.png)

![타입 계층도](type03.png)

![타입 계층도](type04.png)

![타입 계층도](type05.png)

<br>

---

### 서로소 유니온 타입

```js
type Admin = {
  tag: 'ADMIN',
  name: string,
  kickCount: number,
};

type Member = {
  tag: 'MEMBER',
  name: string,
  point: number,
};

type Guest = {
  tag: 'GUEST',
  name: string,
  visitCount: number,
};

type User = Admin | Member | Guest;

// 직관적인 코드
function login(user: User) {
  if (user.tag === 'ADMIN') {
    console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
  } else if (user.tag === 'MEMBER') {
    console.log(`${user.name}님 현재까지 ${user.point}점 보유하셨습니다.`);
  } else if (user.tag === 'GUEST') {
    console.log(
      `${user.name}님은 현재까지 ${user.visitCount}번 방문하셨습니다.`
    );
  }
}

// 좀더 개선한 코드
function login2(user: User) {
  switch (user.tag) {
    case 'ADMIN': {
      console.log(`${user.name}님 현재까지 ${user.kickCount}명 강퇴했습니다.`);
      break;
    }
    case 'MEMBER': {
      console.log(`${user.name}님 현재까지 ${user.point}점 보유하셨습니다.`);
      break;
    }
    case 'GUEST': {
      console.log(
        `${user.name}님은 현재까지 ${user.visitCount}번 방문하셨습니다.`
      );
      break;
    }
  }
}
```
