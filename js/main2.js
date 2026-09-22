let a = 1;
a++;   // a = a + 1;  후순위 연산자
++a;   // a = a + 1;  선순위 연산자
console.log(a);  // 3

// a = 1;
// 3
console.log(a++);  // console.log(a); a = a + 1;
// 5
console.log(++a);  // a = a + 1; console.log(a);

a = 1;
a--;   // --a;
console.log(a);  // 0

// 대입 연산자
a = 1;
a += 3;   // a = a + 3
a -= 3;   // a = a - 3
a *= 3;   // a = a * 3
a /= 3;   // a = a / 3
console.log(a);

// 논리 연산자
a = !true;  // ! -> not  
console.log(a);  // false;

a = true && true; // 양쪽의 값이 둘 다 true일때만 true
console.log(a);   // true

let f = false && false; // 1개라도 false이면 전부 false
console.log('첫번째 f:', f);
f = false && true;   // false
console.log('두번째 f:', f);
f = true && false;   // false
console.log('세번째 f:', f);

let t = true || false;  // 적어도 1개가 true이면 전부 true
t = false || true;   // true
t = true || true;    // true

console.log(8 > 3 && 5 == 5); // false && true -> false -> == 같다
console.log(4 != 4 || 9 > 2); // false || true -> true  -> != 같지않다  