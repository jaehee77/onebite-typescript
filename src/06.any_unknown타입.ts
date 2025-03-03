/**
 * Any
 * 특정 변수의 타입을 우리가 확실히 모를때..
 */

import { unlink } from 'fs';

let anyVar: any = 10;
anyVar = 'hello';
anyVar = {};
anyVar = () => {};

anyVar.toUpperCase(); // 타입 에러검사 발생 안함

let num: number = 10;
num = anyVar; // 다른 타입에 할당도 가능하다 !!

// .. 모든 타입에 모두 가능한 치트키 같은 타입
// 타입검사를 통과는 하지만 잘못된 코드를 작성시 런타임에 에러가 발생할 수 있다.

/**
 * Unknown
 * any 타입과 비슷하지만..
 */
let unknownVar: unknown;
unknownVar = '';
unknownVar = () => {};
unknownVar = 1;

num = 20;
// num.toUpperCase(); // any 타입과 다르게 다른 메소드(연산..)도 안됨
num = unknownVar; // any 타입과 다른점은 다른 모든 타입 변수에 할당 불가하다.

// unknown 타입을 활용하고 싶다면
// 타입가드(정제),타입 좁히기를 통해서 사용가능하다.
if (typeof unknownVar === 'number') {
  num = unknownVar;
}

/**
 * 우리가 변수에 저장할 타입이 확실하지 않을 경우에는
 * any 타입보다는 조금더 안전한 unknown 타입이 낫다 !!!
 * 적어도, unknown 타입은 아무 메소드나 어떤 연산이나
 * 아무 변수에나 값을 넣을 수 없기 때문에
 * 런타임시에 에러를 일으키는 any 타입보다는
 * 타입검사시(컴파일시) 에러를 내는 unknown 타입이 좀더 낫다
 */
