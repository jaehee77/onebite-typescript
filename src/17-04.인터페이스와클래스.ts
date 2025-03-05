/**
 * 인터페이스와 클래스
 */

{
  interface CharacterInterface {
    name: string;
    moveSpeed: number;
    move(): void;
  }

  // implements(구현하다)
  // 클래스의 설계도 역할(구현부)
  // 즉, CharacterInterface라는 인테페이스를 구현한다는 의미

  // ###################
  // 인터페이스는 무조건 퍼블릭 필드만 정의할 수 있음
  // 접근 제어자 private, protected 를 사용하면 오류 발생
  class Character implements CharacterInterface {
    // private extra: number, 인터페이스에 없음
    // 즉, 생성자에 private, protected 를 정의하려면
    // 인터페이스에 정의하지 말고 생성자에 따로 정의해줘야 함
    constructor(
      public name: string,
      public moveSpeed: number,
      private extra: number,
    ) {}

    move(): void {
      console.log(`${this.moveSpeed}로 이동합니다.`);
    }
  }
}
