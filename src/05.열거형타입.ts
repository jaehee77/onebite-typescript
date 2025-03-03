/**
 * 열거형 타입(Enumerable Type)
 * 여러가지 값들에 각각 이름을 부여하고 열거해 두고 사용하는 타입
 */

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
