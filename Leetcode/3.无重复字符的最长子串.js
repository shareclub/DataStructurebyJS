var lengthOfLongestSubstring = function(s) {
    let window = []   //窗口
    let ans = 0    //保存结果
    for(let i=0; i<s.length; i++){   //遍历数组
        let ch = s.charAt(i)   //从数组中取出字符
        if(window.indexOf(ch) > -1){    //判断该字符是否在窗口中
            window = window.slice(window.indexOf(ch) + 1) 
            //如果该字符在窗口中已存在，则窗口更新为该字符之后的那部分
            //如a在[a,b,c]中，则window=[b,c]
        }
        window.push(ch)   //将该字符插入到窗口末尾
        ans = Math.max(ans, window.length)   //与新窗口长度比较，取最大值
    }
    return ans  //返回结果
};

let s = "abcabcbb"
let result = lengthOfLongestSubstring(s)
console.log(result)