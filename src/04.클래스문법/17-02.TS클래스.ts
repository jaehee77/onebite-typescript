/**
 * 타입스크립트의 클래스
 */

{
  const employee = {
    name: '김재희',
    age: 47,
    position: '마크업 개발자',
    work() {
      console.log('열일함');
    },
  };

  class Employee {
    // 필드
    // 생성자에 타입을 정의해 두면 필드에 타입을 정의하지 않아도 됨
    // 생성자에 타입과 this.prop 반드시 정의 !!
    //
    name: string;
    age: number;
    position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }

    work() {
      console.log('열일함');
    }
  }

  // ############################################
  // 상속
  // 이사임원 클래스
  class ExecutiveOfficer extends Employee {
    // 필드
    officeNumber: number;
    constructor(
      name: string,
      age: number,
      position: string,
      officeNumber: number,
    ) {
      super(name, age, position);
      this.officeNumber = officeNumber;
    }
  }

  // 타입스크립트에서 클래스는 타입으로도 취급된다.
  // employeeB 에 마우스를 올려보면 타입이 추론되어 나옴
  const employeeB = new Employee('김재희', 47, '마크업 개발자');
  console.log(employeeB);

  // employeeC 에 클래스인 Employee 를 정의하면
  // Employee가 가진 타입과 메소드를 다 가지고 있어야 함
  // 즉, 타입클래스의 클래스는 타입으로도 활용할 수 있다.
  // 타입스크립트는 구조적 시스템이기 때문에 구조적인 것을 따른다.
  const employeeC: Employee = {
    name: '',
    age: 20,
    position: '',
    work() {
      console.log('일하기 싫음');
    },
  };
}
