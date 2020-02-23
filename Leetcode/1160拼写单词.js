// 给你一份『词汇表』（字符串数组） words 和一张『字母表』（字符串） chars。

// 假如你可以用 chars 中的『字母』（字符）拼写出 words 中的某个『单词』（字符串），那么我们就认为你掌握了这个单词。

// 注意：每次拼写时，chars 中的每个字母都只能用一次。

// 返回词汇表 words 中你掌握的所有单词的 长度之和。


var countCharacters = function(words, chars) {
    let res = ''
    for(let i=0; i<words.length; i++){
        let list = chars
        let wordArr = words[i].split('')
        while(wordArr.length > 0){
            let first = wordArr[0]
            if(list.indexOf(first) > -1){
                wordArr.shift()
                list = list.replace(first, '')
                continue
            }else{
                break
            }
        }
        if(wordArr.length === 0){
            res += words[i]
        }
    }
    return res.length
};

let words = ["cat","bt","hat","tree"]
let chars = "atach"
let result = countCharacters(words,chars)
console.log(result)