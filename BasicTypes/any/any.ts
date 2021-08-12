function returnAny(message: any): any {
  console.log(message);
}

const any1 = returnAny("리턴은 아무거나");

any1.toString();

// 어떻게 전파 되는가?
let losselyTyped: any = {};

const d = losselyTyped.a.b.c.d;

// 동적인 경우는? any를 피하기 위해서
function leakingAny(obj: any) {
  const a = obj.num;
  // b 도 any 가 됨
  const b = a + 1;
  return b;
}

// c 도 any 가 됨
const c = leakingAny({ num: 0 });

function leakingAny1(obj: any) {
  const a: number = obj.num;
  // b 도 any 가 됨
  const b = a + 1;
  return b;
}

// but 함수 안에서 사용하기 전에 처리를 하거나  type guard 를 사용하는 것이 좋음.
