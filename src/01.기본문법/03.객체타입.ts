/**
 * 객체 타입
 * 구조를 기준으로 타입을 정의한다고 하여
 * 구조적 타입 시스템(property based type system)
 * 다른 언어에서는 보통 이름(array, object)을 기준으로 타입을 정의하는데
 * 이를 명목적 타입 시스템
 */
const user: {
  id: number;
  name: string;
} = {
  id: 1,
  name: '김재희',
};

let dog: {
  name: string;
  color?: string; // 옵셔널 프로퍼티
} = {
  name: '토토',
  color: '초코',
};

dog = {
  name: '푸들',
};

let config: {
  readonly apikey: string;
} = {
  apikey: 'MY API KEY',
};
// 읽기 속성으로 수정하지 못하도록 할 수 있음
// config.apikey = 'alfjlaj';
