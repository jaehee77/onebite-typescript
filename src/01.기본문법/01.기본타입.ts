// number 타입
let num: number = 123;
// 타입 주석(annotation) : 타입 작성하는 것을 type annotation 이라고 함

// string 타입
let str: string = '타입스크립트';
let str2: string = `hello ${num}`;

// boolean
let bool1: boolean = true;

// null
let nulltype: null = null;

// undefined
let unditype: undefined = undefined;

let num2: number = null;
// tsconfig 옵션에서 "strictNullChecks": false
// 엄격하게 null check를 하지 않도록하여..
// 자바스크립트에서는 잠시 임시로 null 값을 넣어두는 경우들이 존재함...

/**
 * 리터럴 타입
 * 값 그 자체를 타입으로 정의함
 * 즉, 값으로 만든 타입을 리터럴 타입이라고 함
 * (리터럴 -> 값 : 리터럴이 값이라는 뜻임)
 */
let numA: 10 = 10;
let strA: 'hello' = 'hello';
