//基本思想：对于每一个柱形图，只要向左向右去遍历，然后找到左边第一个小于它的点和右边第一个小于它的点
//从左到右已遍历，使用单调栈，对于栈中每一个下标所对应的元素，它的左边第一个小于它的元素的下标就是栈中前一个下标
//它的右边的第一个比它小的元素的下标就是当前将要入栈的下标
function maxRectangle(heights){
    let stack = []  //初始化栈
    heights.push(-1)   //添加-1是为了判断是否进行了最后一个
    let res = 0   //存储矩形的面积
    for(let i=0; i<heights.length-1; i++){
        if(stack.length == 0 || heights[i] > heights[stack[stack.length-1]])
            stack.push(i)
        else
            while(stack.length && heights[i] < heights[stack[stack.length-1]]){
                let h =  heights[stack[stack.length-1]]
                console.log(h)
                let left = stack.length==0?i:stack[stack.length-2]  //左边最小为栈顶元素前一个下标
                console.log(left)
                //计算将要弹出栈的元素构成的矩形的面积
                res = Math.max(res,h * (i - left -1))   //将最大面积存储在res
                
                stack.pop()    //弹出栈顶元素
            }
        
    }
    //console.log(res)
}

heights = [2,1,5,6,2,3]
maxRectangle(heights)
