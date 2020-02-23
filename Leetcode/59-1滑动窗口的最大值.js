//给定一个数组 nums 和滑动窗口的大小 k，请找出所有滑动窗口里的最大值。

// 示例:

// 输入: nums = [1,3,-1,-3,5,3,6,7], 和 k = 3
// 输出: [3,3,5,5,6,7] 
// 解释: 

//   滑动窗口的位置                最大值
// ---------------               -----
// [1  3  -1] -3  5  3  6  7       3
//  1 [3  -1  -3] 5  3  6  7       3
//  1  3 [-1  -3  5] 3  6  7       5
//  1  3  -1 [-3  5  3] 6  7       5
//  1  3  -1  -3 [5  3  6] 7       6
//  1  3  -1  -3  5 [3  6  7]      7

var maxSlidingWindow = function(nums, k) {
    let window = []   //窗口
    let ans = []   //结果
    if(k==0 || nums.length == 0){  //如果数组为空或窗口为空，则返回空数组
        return ans
    }
    for(let i=0; i<k; i++){   //将第一个窗口填满
        window[i] = nums[i]
    } 
    for(let j=0; j<nums.length-k+1; j++){   //遍历数组nums
        ans[j] = Math.max(...window)   //找出窗口中最大值
        window.shift()    //删除窗口第一个元素
        window.push(nums[j+k])   //移动窗口
    }
    return ans
};

let nums = []
let k = 0
let result = maxSlidingWindow(nums, k)
console.log(result)