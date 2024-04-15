/*
    1.Union Types:
    - Union Types cho phép chỉ định rằng một biến hoặc tham số có thể có một trong các kiểu dữ 
      liệu được xác định. Các kiểu dữ liệu được liệt kê trong Union Types sẽ được kết hợp lại thành 
      một kiểu dữ liệu đại diện cho tất cả các kiểu dữ liệu đó.
    - Sử dụng dấu gạch thẳng "|" để kết hợp các kiểu dữ liệu trong Union Types.
 */
function printId(id:number |string) {
    console.log(id);
}

console.log(10);
console.log("hello ptit");

/*
    2.Intersection Types:
    - Intersection Types cho phép tạo ra một kiểu dữ liệu mới bằng cách kết hợp các kiểu dữ liệu khác lại 
      với nhau. Một biến hoặc tham số có kiểu Intersection Types sẽ có tất cả các thuộc tính và phương thức 
      từ các kiểu dữ liệu được kết hợp.
    - Sử dụng dấu "&" để kết hợp các kiểu dữ liệu trong Intersection Types.
 */
type Printable ={
    print(): void;
}
type Loggable = {
    log():void;
}

function printAndLog(obj:Printable & Loggable) {
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
}

printAndLog(objs);