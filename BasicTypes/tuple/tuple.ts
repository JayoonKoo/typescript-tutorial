let x: [string, number];

// 순서도 맞아야 되고 타입도 맞아야 되고 길이도 맞아야 한다.
x = ["hello", 39];

const person: [string, number] = ["mark", 49];

// 첫번째는 string, 두번째는 number임이 확실해 진다.
// 세번째를 추가하면 오류가 나게 된다.
const [first, second] = person;
