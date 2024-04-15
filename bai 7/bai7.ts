function checkTypeData(input:any) {
    if(typeof input === "number"){
        console.log("Số");
    } else if(Array.isArray(input)){
        console.log("Mảng");
    } else if(typeof input === "object"){
        console.log("Đối tượng");
    }
}

checkTypeData(10);
checkTypeData([1,2,3,4,5]);
checkTypeData({name:"minh thu",age:30});