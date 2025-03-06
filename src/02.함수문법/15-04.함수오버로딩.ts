/**
 * 함수 오버로딩
 * 하나의 함수를 매개변수의 개수나 타입에 따라
 * 여러가지 버전으로 정의하는 방법
 */

import { log } from 'console';

// 1. 하나의 함수 func
// 2. 모든 매개 변수의 타입 number
// 3. Ver1. 매개변수가 1개 -> 이 매개변수에 20을 곱한 값 출력
// 4. Ver2. 매개변수가 3개 -> 이 매개변수들을 다 더한 값 출력

// 버전들(구현부 없이 작성) -> 오버로드 시그니처
// 함수 구현부 없이 선언식만 작성한 것을 오버로드 시그니처라고 한다.
function func(a: number): void;
function func(a: number, b: number, c: number): void;

// 실제 구현부 => 구현 시그니처
function func(a: number, b?: number, c?: number) {
  if (typeof b === 'number' && typeof c === 'number') {
    console.log(a + b + c);
  } else {
    console.log(a * 20);
  }
}

func();
func(1);
func(1, 2);
func(1, 2, 3);
