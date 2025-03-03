/**
 * 타입 별칭(type alias)
 * 타입을 변수처럼 사용할 수 있음
 */

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};

function func() {
  // 스코프를 따라간다.
  type User = {};
}

let user1: User = {
  id: 1,
  name: '김재희',
  nickname: 'jaiyah',
  birth: '1977.04.17',
  bio: '안녕하세요',
  location: '서울시',
};

let user2: User = {
  id: 2,
  name: '이수학',
  nickname: '한입',
  birth: '1997.10.12',
  bio: '메롱',
  location: '부천시',
};

/**
 * 인덱스 시그니처
 * 객체타입의 정의를 좀더 유연하게 도와준다.
 * key: value 의 규칙을 기준으로 객체의 타입을 정의
 */
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  korea: 'Ko',
  unitedState: 'us',
  unitedKingdom: 'uk',
};

type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  korea: 410,
  unitedState: 840,
  unitedKingdom: 826,
};

// 빈 객체이지만 위반할 타입이 없으니까 에러가 발생 안함(주의 필요!!)
let countryNumberCodesEmpty = {};

//
// 빈 객체를 넣을 경우 문제가 될 수 있으므로 기본값처럼 하나를 작성하도록 유도할 수 있다.
type CountryNumberCodes2 = {
  [key: string]: number;
  korea: number;
};
let countryNumberCodes2: CountryNumberCodes2 = {
  korea: 410,
};

// 인덱스 시그니처를 사용할 경우 추가적인 프로퍼티를 작성할 경우
// 인덱스 프로퍼티의 타입과 일치(호환)되어야 한다.
type CountryNumberCodes3 = {
  [key: string]: number;
  korea: string; // 에러 발생
};
let countryNumberAndStringCodes: CountryNumberCodes2 = {
  korea: 'ko', // 에러 발생
};
