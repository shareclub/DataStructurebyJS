//顺序查找的基本思想：从表的一段开始顺序扫描，依次扫描节点关键字和给定k值比较，
//如果相等则表示查找成功，若扫描结束仍未找到关键字等于k的节点，表示查找失败

function sequentialSearch(k,arr){
    for(var i=0; i<arr.length; i++){
        if(k == arr[i])
            return i;
    }
    return -1;
}

arr = [1,4,2,5,8,7,9];
k = 1;
result = sequentialSearch(k,arr)
if(result != -1){
    console.log("查找成功，下标为：",result);
}else {
    console.log("查找失败哦！！！");
}
