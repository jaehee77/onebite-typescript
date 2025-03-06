/**
 * 제네릭 클래스
 */

{
  // ###########
  // 개선 전 코드
  // ###########
  class NumberList {
    constructor(public list: number[]) {}

    push(data: number) {
      this.list.push(data);
    }

    pop() {
      this.list.pop();
    }

    print() {
      console.log(this.list);
    }
  }

  // 인스턴스 생성
  const numberList = new NumberList([1, 2, 3]);

  numberList.pop();
  numberList.push(4);
  numberList.print();
}

{
  // ###########
  // 개선 후 코드

  class List<T> {
    constructor(public list: T[]) {}

    push(data: T) {
      this.list.push(data);
    }

    pop() {
      this.list.pop();
    }

    print() {
      console.log(this.list);
    }
  }

  // 인스턴스 생성
  const numberList = new List([1, 2, 3]);

  numberList.pop();
  numberList.push(4);
  numberList.print();

  // 문자열로 인수 전달
  const strList = new List(["hi", "jaehee"]);
  strList.pop();
  strList.push("홍길동");
  strList.print();
}
