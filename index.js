// call,apply,bind 的区别和相同点。call和apply和bind都能改变方法的this指向。指向于传递的第一个参数,如果第一个参数是null或者underfind那就指向windows。
// 区别：
// call事例
var arr = [1, 2, 3, 89, 46];
Math.max.call(null, arr[0], arr[1], arr[2], arr[3], arr[4])
89
// call第一个参数是this指向的作用域。后面的是一系列参数列。返回的是值
var arr = [1, 2, 3, 89, 46];
Math.max.apply(null, arr)
89
// bind和call基本相同，区别返回参数不是结果，而是返回了一个改变this后的函数，原函数不回改变
var arr = [1, 2, 3, 89, 46];
Math.max.bind(null, arr[0], arr[1], arr[2], arr[3], arr[4]);
max() { [native code] }