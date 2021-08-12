// ts 에서 추론을 통해 return 타입이 void 임을 알게됨.
function returnVoid(message: string) {
  console.log(message);
}

const r = returnVoid("리턴이 없다.");
