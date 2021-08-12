// 보통은 이 방법을 사용함.
let list: number[] = [1, 2, 3];

let listUnion: (number | string)[] = [1, 2, 3, "4"];

// 만약 데이터의 순서나 상황을 알고 있다면 튜플을 사용할 것

// jsx 에서 충돌 할수도 있음.
let list2: Array<number> = [1, 2, 3];
