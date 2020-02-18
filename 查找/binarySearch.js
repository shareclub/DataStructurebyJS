//折半查找基本思想：
//最中间值将表分成左右两个子表
//将给定值k与最中间值比较，如果相等，则查找成功
//如果不相等，则比较k值和最中间值，如果k<最中间值，进入左边子表继续查找，如果k>最中间值，进入右子表继续查找
//如此递归进行，直到查找成功或查找失败



// 普通版本
// function binarySearch(k,arr) {
//     var low = 0;
//     var high = arr.length-1;
//     var mid;
//     while(low <= high){
//         mid = Math.floor((low + high)/2);   //中间值
//         //console.log(mid);
//         if(k == arr[mid]){
//             return mid;
//         }else if(k < arr[mid]){
//             high = mid - 1;
//         }else if (k > arr[mid]){
//             low = mid + 1;
//         }
//     }
//     return -1;
// }

//递归版本
function binarySearch(k,arr,low,high){
   var mid = Math.floor((low + high) / 2);
   console.log(mid);
   if(k == arr[mid]){
       return mid;
   } else if(k < arr[mid]){
       high = mid - 1;
       return binarySearch(k, arr, low, high);
   } else if(k > arr[mid]){
       low = mid + 1;
       return binarySearch(k, arr, low, high);
   }
   return -1;
}

arr = [1,2,3,4,5,6,7,8,9];
k = 6;
//普通版本
//result = binarySearch(k,arr);
//递归版本
result = binarySearch(k,arr,0,arr.length);

if(result != -1){
    console.log("查找成功，下标为：",result);
}else {
    console.log("查找失败哦！！！");
}
