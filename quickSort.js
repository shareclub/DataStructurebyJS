

function quickSort(arr){
    if(arr.length < 1){    //数组长度小于1时返回
        return arr;
    }
    var pivotIndex = Math.floor(arr.length/2);   //找到基准数
    var pivot = arr.splice(pivotIndex,1)[0];   //取出基准数，splice返回的是数组，所以取下标0
    var left = [];    //定义两个数组分别存储基准数左右两边的元素
    var right = [];
    for(var i=0; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        } else {
            right.push(arr[i])
        }
    }
    return quickSort(left).concat([pivot],quickSort(right));   //左右递归调用quickSort,并将基准数插入之间}
}
var arr = [2,7,4,5,3,8,1,9,6];
console.log('排序前数组：' , arr);
console.log('排序后数组：' ,quickSort(arr));