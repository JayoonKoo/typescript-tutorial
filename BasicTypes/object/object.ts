// object literal
const person1 = { name: "mark", age: 39 };

// 프리미티브 타입이 아닌 겻을 넘겨줌
// 그러니까 object 타입은 프리미 티브 타입은 받지 았겠어라는 제약 사항을 넣는것
const person2 = Object.create({ name: "mark", age: 39 });
