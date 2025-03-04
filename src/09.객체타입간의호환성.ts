/**
 * 객체 타입간의 호환성
 * 프로퍼티가 적은 쪽이 슈퍼타입, 많은 쪽이 서브타입
 * 객체 타입에 프로퍼티가 많은 쪽이 작은 쪽의 타입으로 할당 가능하다.
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "멍멍이",
  color: "brown",
  breed: "포메라니안",
};

// 업캐스팅
animal = dog;

// 다운캐스팅
dog = animal;

//
//
// ======================================

// 슈퍼타입
type Book = {
  name: string;
  price: number;
};

// 서브타입
type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "타입스크립트",
  price: 10000,
  skill: "typescript",
};

book = programmingBook;
programmingBook = book;

// book = programmingBook;
// skill 을 할당을 했는데 오류가 발생하고 있음
// 근데 무엇보다 book = programmingBook; 이것은 가능한데, 아래 코드는 오류가 발생하고 있음.
// 왜 그럴까??

let book2: Book = {
  name: "리액트",
  price: 20000,
  skill: "react.js",
};
/**
 * 초과 프로퍼티 검사
 * 객체타입의 변수를 초기화(정의)할 때는 초과된 프로퍼티가 있는지 검사를 한다.
 * 그래서 위에서 초기 리터릴을 작성할때 초과된 프로퍼티가 있어서 오류가 발생함
 * 그래서 아래처럼 작성하면 오류가 발생하지 않음
 */
let book3: Book = programmingBook;
console.log(book3);
