/**
 * 접근 제어자(access modifier)
 * -> 특정필드나 메소드에 접근할 수 있는 범위를 설정할 수 있는 문법
 */

{
  class Employee {
    // 필드
    public name: string; // public 생략 가능, 기본값임
    private age: number;
    protected position: string;

    // 생성자
    constructor(name: string, age: number, position: string) {
      this.name = name;
      this.age = age;
      this.position = position;
    }

    work() {
      // private 필드는 클래스 내부에서만 접근 가능
      console.log(`열일함 ${this.age}`);
    }
  }

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

    func() {
      // age는 부모 클래스에서 private 으로 정의되어 있기 때문에 접근 불가능
      console.log(this.age);

      // protected 는 파생 클래스까지만 허용 가능
      console.log(this.position);
    }
  }

  const employee = new Employee('김재희', 47, '마크업');

  // 동적으로 프로퍼티 변경 가능
  employee.name = '토토';

  // privage 접근자 정의로 외부에서 접근 불가능
  employee.age = 7;

  // protected 접근자 정의로 외부에서 접근 불가능
  employee.position = '멍멍이';
}

{
  /**
   * 생성자에 접근제어자를 정의하면 필드는 작성 X
   */
  class Employee {
    // 필드
    // constructor 에 접근 제어자를 작성하면
    // 필드를 자동으로 생성되어 작성 X
    // 작성하면 오류 발생

    // 생성자
    constructor(
      public name: string,
      private age: number,
      protected position: string,
    ) {
      // 접근제어자를 작성하면 필드의 값 초기화도 자동으로 정의
      // this.name 같은 것을 작성할 필요가 없음 !!!
    }

    work() {
      // private 필드는 클래스 내부에서만 접근 가능
      console.log(`열일함 ${this.age}`);
    }
  }
}
