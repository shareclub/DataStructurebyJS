// 根据每日 气温 列表，请重新生成一个列表，对应位置的输入是你需要再等待多久温度才会升高超过该日的天数。如果之后都不会升高，请在该位置用 0 来代替。

// 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4, 2, 1, 1, 0, 0]。

// 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。


//思路1：直接暴力穷举：
//设置两个指针，一个指针指向当前元素，另一个指针向后遍历数组，
//直到找到元素比当前元素大的，它们的索引差就是当前元素对应的值
//最后一个元素对应的值肯定为0，所以直接在数组末尾push一个0
// var dailyTemperatures = function(T) {
//     var Tem = [];
//     for(var i=0; i<T.length; i++){
//         for(var j=i+1; j<T.length; j++){
//             if(T[i] < T[j]){
//                 Tem[i] = j - i;
//                 break;
//             } else {
//                 Tem[i] = 0;
//             }
//         }
//     }
//     Tem.push(0);
//     return Tem;
// };


//思路2：使用单调递减栈实现，从前往后遍历
//1、遍历数组入栈，当将要入栈元素小于栈顶元素时入栈，
//2、当该元素大于栈顶元素时，表示该元素为所求元素，记录索引，弹出栈顶元素，
//3、该元素继续与新的栈顶元素比较，直到能入栈

// var dailyTemperatures = function(T){
//     let res = new Array(T.length).fill(0)   //用于存储结果，与T等长，全部初始化为0
//     let stack = []  //初始化栈
//     for(let i=0; i<T.length; i++){
//         while(stack.length && T[i] > T[stack[stack.length-1]]){
//             let index = stack.pop()
//             res[index] = i - index
//         }
//         stack.push(i)
            
//     }
//     return res;
// };

//思路3：使用单调递减栈实现，从后往前遍历
//1、遍历数组入栈，如果当前元素，比栈顶元素大，则弹出栈顶元素
//2、该元素继续与新的栈顶元素比较，比较后如果栈为空，则该元素对应位置为0，
//3、如果比栈顶元素小，则将该元素入栈
var dailyTemperatures = function(T){
    let res = []   //用于存储结果，与T等长，全部初始化为0
    let stack = []  //初始化栈
    for(let i=T.length-1; i>=0; i--){
        
        while(stack.length && T[i] >= T[stack[stack.length-1]]){
            stack.pop()
        }
        if(stack.length == 0)  //栈为空
            res[i] = 0;
        else 
            res[i] = stack[stack.length-1] - i;
        stack.push(i)
            
    }
    return res;
};


var T = [89,62,70,58,47,47,46,76,100,70];
var result = dailyTemperatures(T);
console.log(result);