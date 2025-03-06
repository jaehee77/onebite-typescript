/**
 * 인터페이스의 확장(상속)
 */

{
  interface Animal {
    name: string;
    age: number;
  }

  // 중복 발생...
  interface Dog {
    name: string;
    agge: number;
    isBark: boolean;
  }
  interface Cat {
    name: string;
    agge: number;
    isScratch: boolean;
  }
  interface Chicken {
    name: string;
    agge: number;
    isBark: boolean;
  }
}

{
  // 개선된 코드
  interface Animal {
    name: string;
    age: number;
  }

  interface Dog extends Animal {
    isBark: boolean;
  }

  let dog: Dog = {
    name: '토토',
    age: 7,
    isBark: true,
  };

  // 상속받은 타입은 재정의할 수 있지만
  // 아무 타입이나 정의할 수 있는 것이 아니라
  // 상속타입의 서브타입으로만 정의할 수 있다.
  interface Cat extends Animal {
    name: '냥냥이';
    isScratch: boolean;
  }

  let cat: Cat = {
    name: '양양이', // 오류발생(문자 리터럴 타입인 '냥냥이' 로 정의되어 있기 때문)
    age: 10,
    isScratch: false,
  };
  interface Chicken extends Animal {
    isBark: boolean;
  }

  // ########################################
  // 여러가지 인터페이스를 확장 가능하다.
  interface DogCat extends Dog, Cat {}

  let dogCat: DogCat = {
    name: '',
    age: 10,
    isBark: true,
    isScratch: false,
  };
}

{
  type Animal = {
    name: string;
    age: number;
  };

  // ##########################################
  // 인터페이스는 객체타입이라면 확장할 수 있다 !!!
  // ##########################################
  interface Dog extends Animal {
    isBark: boolean;
  }
}
