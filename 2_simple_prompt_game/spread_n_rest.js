// UnPaking
const str1 = "문자열";
const arr1 = [str1, str1];
console.log(arr1);

const arr2 = [...str1];
console.log(arr2);

const arr3 = [...arr1];
// 기존 배열 참조가 불변이므로 깊은 복사를 위해서 새 배열을 선언할 경우
// 전개(spread) 문법 ...이 아주 적절하게 쓰임!
const arr3_1 = arr1;
// 이상하다? 주소값을 바꾸지 않으려고 const 선언한 것을
// 그대로 안쓰고 괜히 변수명을 달리하네?

console.log("arr3: " + arr3);
console.log("arr3_1: " + arr3_1);

const arr4 = [...arr2, ...arr3];
console.log(...arr4);

console.log("--------------------------------");

let scores = [10, 20, 30];

// max(...values: number[]); number;
// Packing
// ...values 형태로 전개 구문을 파라미터에 사용했을 경우 => 일반 항목 나열을 배열로 바꿔줌

console.log(Math.max(scores)); // Error (Array 전달 - 에러)
// max() {
// [[10, 20, 30]] ???
// => 숫자를 순회하지 못하고 배열을 만남! : NaN
// }
console.log(Math.max(...scores)); // Spread 된 여러 개의 값 전달 - 정상 작동동

// ex : 유저를 로그인 처리한 뒤, 기존 정보에 서버에서 받아온 추가 정보를 결합하는 예제
// 기존 유저 정보
let userInfo = { username: "kai", email: "abc@tt.cc", device: "Mobile" };

// 1) 객체 스프레드 후 추가 정보 입력
let loginUser = { ...userInfo, authorized: true, isAdmin: false };
// 결합 결과 :
//     info1 전개된 후 개별 필드로
//   { username: 'kai',
//     email: 'abc@tt.cc',
//     device: 'Mobile',
//     추가 필드
//     authorized: true,
//     isAdmin: false
//     info2 전개 후 개별 필드로
//      homeAddr: 'seoul', age:25}
console.log(loginUser);
