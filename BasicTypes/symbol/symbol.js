var _a;
console.log(Symbol("foo") === Symbol("foo"));
var sym = Symbol();
var obj = (_a = {},
    _a[sym] = "value",
    _a);
console.log(obj[sym]);
