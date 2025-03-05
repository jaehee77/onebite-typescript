/**
 * 클래스 소개
 */

import { log } from 'console';

{
  // 만약 클래스가 없다면...
  let studentA = {
    name: '김재희',
    grade: 'A+',
    age: 40,
    study() {
      console.log('욜씨미 열공중...');
    },
    introduce() {
      console.log('안녕하세요');
    },
  };
  let studentB = {
    name: '정진',
    grade: 'B-',
    age: 42,
    study() {
      console.log('욜씨미 열공중...');
    },
    introduce() {
      console.log('안녕하세요');
    },
  };
}

{
  class Student {
    // 필드 (어떤 모양의 객체를 찍어낼지 프로퍼티를 정의)
    name;
    grade;
    age;

    // 생성자(객체를 생성하는 역할)
    // 이 코드에선 만드는 객체의 name은 어떻게 할건지..
    // grade, age는 어떻게 할건지 매개변수를 정의해야함
    constructor(name, grade, age) {
      // this 는 지금 만들고 있는 객체
      // 즉, 클래스를 통해 생성하는 객체(인스턴스)
      this.name = name;
      this.gradde = grade;
      this.age = age;
    }

    study() {
      console.log('욜씨미 열공중..');
    }

    introduce() {
      console.log(`안녕하세요 ${this.name}입니다.`);
    }
  }

  // 스튜던트 인스턴스
  let studentA = new Student('김재희', 'A+', 40);
  // console.log(studentA);

  studentA.study();
  studentA.introduce();

  // 개선전의 클래스
  class StudentDeveloper {
    name;
    grade;
    age;
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill) {
      this.name = name;
      this.gradde = grade;
      this.age = age;
      this.favoriteSkill = favoriteSkill;
    }

    study() {
      console.log('욜씨미 열공중..');
    }

    introduce() {
      console.log(`안녕하세요 ${this.name}입니다.`);
    }

    programming() {
      console.log(`${this.favoriteSkill}로 프로그래밍하고 있음`);
    }
  }
}

{
  // 개선된 클래스
  // 상속 클래스

  class Student {
    name;
    grade;
    age;

    constructor(name, grade, age) {
      this.name = name;
      this.gradde = grade;
      this.age = age;
    }

    study() {
      console.log('욜씨미 열공중..');
    }

    introduce() {
      console.log(`안녕하세요 ${this.name}입니다.`);
    }
  }

  class StudentDeveloper extends Student {
    favoriteSkill;

    constructor(name, grade, age, favoriteSkill) {
      // super 는 부모클래스의 생성자(constructor)가 호출됨
      super(name, grade, age);
      this.favoriteSkill = favoriteSkill;
    }

    programming() {
      console.log(`${this.favoriteSkill}로 프로그래밍하고 있음ㄴ`);
    }
  }

  let student = new StudentDeveloper('김재희', 'A', 20, 'typescript');
  console.log(student.name);
  console.log(student.programming());
}
