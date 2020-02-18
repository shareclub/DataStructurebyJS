//插值查找基本思想：
//在二分查找的基础上，更改mid为自适应的计算方式：
//mid = low + (k-arr[low])/(arr[high]-arr[low])*(high-low)


// 普通版本
function insertionSearch(k,arr) {
    var low = 0;
    var high = arr.length-1;
    var mid;
    while(low <= high){
        mid = low + (high-low)/(arr[high]-arr[low])*(k-arr[low]);   //中间值
        console.log(mid);  //测试mid
        if(k == arr[mid]){
            return mid;
        }else if(k < arr[mid]){
            high = mid - 1;
        }else if (k > arr[mid]){
            low = mid + 1;
        }
    }
    return -1;
}


 
 arr = [1,2,3,4,5,6,7,8,9];
 k = 3;
 result = insertionSearch(k,arr);

 if(result != -1){
     console.log("查找成功，下标为：",result);
 }else {
     console.log("查找失败哦！！！");
 }
 