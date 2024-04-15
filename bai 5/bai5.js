"use strict";
/*
    1.Union Types:
    - Union Types cho phép chỉ định rằng một biến hoặc tham số có thể có một trong các kiểu dữ
      liệu được xác định. Các kiểu dữ liệu được liệt kê trong Union Types sẽ được kết hợp lại thành
      một kiểu dữ liệu đại diện cho tất cả các kiểu dữ liệu đó.
    - Sử dụng dấu gạch thẳng "|" để kết hợp các kiểu dữ liệu trong Union Types.
 */
function printId(id) {
    console.log(id);
}
console.log(10);
console.log("hello ptit");
function printAndLog(obj) {
    obj.print();
    obj.log();
}
let objs = {
    print() {
        console.log("Print");
    },
    log() {
        console.log("Log");
    },
};
printAndLog(objs);
