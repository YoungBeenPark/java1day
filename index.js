// 1 선언 및 할당
// var num = 30;
// let name = "youngbeen"
// const residence = `danjeon`
// console.log(num, name, residence) // 30 young danjeon
// 2

// // person 이용
// const person = {
//   name : 'john',
//   age : 20 
// }
// console.log(person.name)
// console.log(person.age)

 
// // typeof이용
// console.log(typeof num,typeof name,typeof residence)



// // 산술 연산
// const a = 10;
// const b = 20;
// console.log(a+b); // 30
// console.log(a-b); // 10-20 = -10
// console.log(a*b); // 10 x 20 = 200
// console.log(a/b); // 10 / 20 = 0.5
// console.log(a%b); // 10 & 20 = 10



// // 문자열 연결
// let c = 'park' 
// let d = 'young been'
// console.log(c,d)



// // 조건문
// let age = 18;
// if (age >= 18) {
//   console.log('성인입니다')
// } else {
//   console.log('미성년자입니다')
// }



// // 삼항 연산자
// const value = ( age >= 18 ) ? '성인입니다.' : '미성년자입니다.' ;
// console.log(value)



// // 배열 선언과 사용
// const color = ['red', 'blue', 'purple'];
// // [첫번쨰]
// console.log(color[0]);
// // [두번째]
// console.log(color[1]);
// // [세번째]
// console.log(color[2]);



// // 배열 반복과 합계 계산
// //변수 선언
// const number = [2,3,4,5,6,7,8,9];
// //합계 저장 변수 선언
// let numsum = 0;
// // 삼항에서 .length를 이용
// for (let i = 0; i < number.length; i++ ){
//   numsum += number[i];
// }
// console.log(numsum)



// //논리 연산자 1,2,3
// const onest = true;
// const twost = false;
// // OR연산자 둘중 하나만 ture여도 참으로 출력
// console.log(onest||twost);
// // AND 연산자 두개 다 같은 값 일시 참으로 출력
// console.log(onest&&twost);
// // NOT 연산자 (부정연산) 값의 반대로 출력
// console.log(!onest);
// console.log(!twost);



// '실습과제2'@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
// 1.	var, let, const를 사용하여 각각 변수를 선언하고 값을 할당하세요.

// var i = 5;
// let ii = 10;
// const iii= 20;
// console.log(i);
// console.log(ii);
// console.log(iii);



// 2.	다음 변수들의 데이터 타입을 콘솔에 출력하세요.

// let a = 42;
// let b = 'hello';
// let c = true;
// let d = null;
// let e;
// console.log(typeof a);
// console.log(typeof b);
// console.log(typeof c);
// console.log(typeof d);
// console.log(typeof e);



// 3.	두 개의 숫자를 더하고, 뺄셈, 곱셈, 나눗셈을 하는 코드를 작성하세요.

// let num1 = 10;
// let num2 = 5;
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);



// 4.	두 개의 숫자를 비교하고 결과를 콘솔에 출력하세요.

// let num1 = 10;
// let num2 = 5;
// console.log(num1 > num2);
// console.log(num1 < num2);
// console.log(num1  num2);



// 5.	논리 연산자를 사용하여 두 개의 불리언 변수를 조합하세요.

// let a = true;
// let b = false;
// console.log(a || b); 
// console.log(a && b); 
// console.log(!a);
// console.log(!b);



// 6.	할당 연산자를 사용하여 변수에 값을 더하고 빼세요.

// let number = 20;
// console.log(number += 10) ;
// console.log(number -= 10) ;
// console.log(number *= 10) ;
// console.log(number /= 10) ;



// 7.	두 개의 문자열을 연결하고 결과를 출력하세요.

// let str1 = "Hello";
// let str2 = "World";
// let result = (str1+" "+ str2);
// console.log(result)




// 8.	템플릿 리터럴을 사용하여 변수를 문자열에 포함하세요. $이용과 백틱 `

// let name = "Alice";
// let age = 25;
// let message = `My name is ${name} and I am ${age}.`;
// console.log(message);



// 9.	배열을 선언하고 요소에 접근하여 출력하세요.

// let fruits = ["Apple", "Banana", "Cherry"];
// console.log(fruits[1]);
// console.log(fruits[0]);
// console.log(fruits[2]);



// 10.	객체를 선언하고 속성에 접근하여 출력하세요.

// let person = {
//   name: "John",
//   age: 30,
//   city: "New York"
// };
// console.log(person.name);
// console.log(person.age);
// console.log(person.city);



// 문제 11: 함수 선언 및 호출

// 11.	두 수를 더하는 함수를 선언하고 호출하여 결과를 출력하세요.

// function add(a, b) {
//   return a + b ;
// }
// console.log(add(2, 6)); // 8



// 12. 주어진 수가 짝수인지 홀수인지 판단하는 조건문을 작성하세요.

// let num = 7 ;
// function add(number) {
//   if(number % 2 === 0) {
//     console.log(number + '은 짝수입니다.');
//   } else {
//     console.log(number + '은 홀수입니다.');
//   }
// }
// add(7);



// 13. 1부터 10까지의 숫자를 출력하는 for 반복문을 작성하세요.

// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }



// 14. 1부터 10까지의 숫자를 출력하는 while 반복문을 작성하세요.

// let i = 1 ;
// while (i <= 10) {
//   console.log(i)
//   i+=1
// }



// 15. 배열의 각 요소를 출력하는 forEach 반복문을 작성하세요.

// let fruits = ['Apple', 'Banana', 'Cherry'];
// fruits.forEach(function(fruits) {
//   console.log(fruits)
// });



// 16. 배열의 각 요소에 2를 곱한 새로운 배열을 반환하는 코드를 작성하세요.

// let numbers = [1, 2, 3, 4];
// let newnum = [];
//   for(let i = 0; i < numbers.length; i++){
//     newnum[i] = numbers[i] *2;
//   }
//   console.log(newnum)



// 17. 배열에서 짝수만 필터링하는 코드를 작성하세요.

// let numbers = [1, 2, 3, 4, 5, 6];
// let newnumbers = [];

// for (let i = 0; i < numbers.length; i++){
//   if (numbers[i] % 2 === 0) {
//     newnumbers.push(numbers[i]) ;
//   }
// }
// console.log(newnumbers)



// 18. 문자열을 대문자로 변환하고 출력하는 코드를 작성하세요. .toUpperCase()이용

// let str = 'hello world';
// let newstr = str.toUpperCase();
// console.log(newstr)



// 19. 현재 날짜와 시간을 출력하는 코드를 작성하세요.

// const now = new Date();
// console.log(now)



// 20. Math 객체를 사용하여 주어진 수의 제곱근을 구하는 코드를 작성하세요.

// let num = 16;
// console.log(Math.sqrt(num));
