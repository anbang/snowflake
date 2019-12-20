var idWorker = require("../index");
let id = idWorker.nextId();
console.log(id, id.toString())

//约640-660ms
//约850-1000ms
console.time('100W时间')
for (let i = 0, len = 10000 * 100; i < len; i++) {
    id = idWorker.nextId();
}
console.timeEnd('100W时间');

//约2600-2800ms
//约3600-3850ms
console.time('409.6W时间')
for (let j = 0, len2 = 10000 * 409.6; j < len2; j++) {
    id = idWorker.nextId();
}
console.timeEnd('409.6W时间');