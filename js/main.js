/**
    아래는 자바스크립 변수 선언 및 출력 예시
*/

// 변수 선언 예제
/*
let value = 1;      // let 변수 선언
console.log(value); // value변수에 선언된 값을 화면에 출력
value = 2;          // value변수 안에 2값을 대입
console.log(value); // 다시 value변수 값을 출력
*/

// 상수 선언 예제
const a = 1;
//const a = 2;
//a = 2;  // a가 상수로 선언되어 있어서 값을 바꾸면 에러 발생
const PI = 3.14;

// 변수 선언(중복된 이름으로도 사용이 가능)
var b = 1;
var b = 2;
console.log(b);

// String(문자 데이터) 
// 따옴표를 사용합니다. 
let myName = "HEROPY"; 
let email = 'thesecon@gmail.com'; 
let hello = `Hello ${myName}?!`;
let obj1 = {
    myName: "HEROPY",
    email: 'thesecon@gmail.com',
    hello: `Hello ${myName}?!`
};
console.log(obj1);      // {myName: 'HEROPY', email: 'thesecon@gmail.com', hello: 'Hello HEROPY?!'}
console.log(typeof(obj1));      // object

// 콘솔 탭에서 출력
console.log(myName); // HEROPY 
console.log(email); // thesecon@gmail.com 
console.log(hello); // Hello HEROPY?! 
// viewport(body)로 출력
document.write(myName + '<br>'); // HEROPY 
document.write(email + '<br>'); // thesecon@gmail.com 
document.write(hello + '<br>'); // Hello HEROPY?! 

// Number(숫자 데이터) 
// 정수 및 부동소수점 숫자를 나타냅니다. 
let number = 123; 
let opacity = 1.57; 
console.log(number); // 123 
console.log(opacity); // 1.57 
document.write(number + '<br>'); // 123 
document.write(opacity + '<br>'); // 1.57

// Boolean(불린 데이터) 
// true, false 두 가지 값밖에 없는 논리 데이터입니다. 
let checked = true;    // true -> 1
let isShow = false;    // false -> 0
console.log(checked); // true 
console.log(isShow); // false

// typeof(변수이름) -> 결과값은 데이터타입 출력
console.log(typeof(myName));  // string
console.log(typeof(number));  // number
console.log(typeof(isShow));  // boolean

// Undefined 
// 값이 할당되지 않은 상태를 나타냅니다. 
let undef; 
let obj = { abc: 123 }; 
console.log(undef); // undefined 
console.log(obj.abc); // 123 
console.log(obj.xyz); // undefined 

// Object(객체 데이터) 
// 여러 데이터를 Key:Value 형태로 저장합니다. { } 
let user = { 
  // Key: Value, 
  name: 'HEROPY', 
  age: 85, 
  isValid: true 
}; 
console.log(user.name); // HEROPY 
console.log(user.age); // 85 
console.log(user.isValid); // true

// Null 
// 어떤 값이 의도적으로 비어있음을 의미합니다. 
let empty = null; 
console.log(empty); // null

let my_name = 1;