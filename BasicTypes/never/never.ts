function error(message: string): never {
  throw new Error(message);
}

// 이때도 never라고 추론하게 된다.
function fail() {
  return error("faild");
}

// 무한 반복에 예시에서 never를 사용할 수 있다.
function infinitiLoop(): never {
  while (true) {}
}

let a: string = "hello";

// 잘못된 타입을 넣는 실수를 막을 수 있다.
// a 는 스코프 안에서 never가 된다.
if (typeof a !== "string") {
  a;
}

declare const b: string | number;

// b는 number 가 된다.
// 이런식으로 type guard를 사용할 수 있다.
if (typeof b !== "string") {
  b;
}
