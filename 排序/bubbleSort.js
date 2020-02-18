//原理：依次相邻位置进行大小比较，如果前一个比后一个大就互换位置

function bubbleSort(arr){
    for(var i=0; i<arr.length; i++){    //
        for(var j=0; j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;        
            }
        }
    }
    return arr;
}

var arr = [2,1,2,5,6,3,8,4,9,7]
console.log("排序前数组：", arr);
console.log("排序后数组：", bubbleSort(arr));