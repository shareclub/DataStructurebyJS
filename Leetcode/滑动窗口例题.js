// 例题1： 给一组大小为n的整数数组，计算长度为k的子数组的最大值
// 比如：数组{1,2,3,4,5,7,6,1,8},k=2，那么最终结果应该是7+6=13最大。

//基本思路：使用滑动窗口，向右移动，并记录每个窗口的状态，然后比较大小，将和最大的保存在sum中，最后返回

// function maxArr(arr, k){
//     if(k > arr.length){
//         return -1  //k大于数组长度，返回-1
//     }
//     let left = 0    //滑动窗口的左边界
//     let sum = 0    //保存子数组和最大
//     for(let i=0; i<k; i++){
//         sum += arr[i]    //计算第一个窗口的值
//     }
//     let tempsum = sum   //临时存储sum,方便作比较
//     while(left+k < arr.length){   //判断是否到达数组末尾
//         tempsum = tempsum - arr[left] + arr[left+k]   //窗口移动，减去窗口的左边，加上窗口右边的下一个
//         left++   //这个也是使窗口移动
//         sum = Math.max(sum, tempsum)   //比较最大值
//     }
//     return sum
// }

// let arr = [1,2,3,4,5,7,6,1,8]
// let k = 2
// let result = maxArr(arr, k)
// console.log(result)





