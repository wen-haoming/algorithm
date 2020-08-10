let arr1 =  ["flower","flow","flight"]
let arr2  = ["dog","racecar","car"]


/**
 *  1. 先取第一个字符串做基础，然后循环接下来的每个str
 *  2. 然乎每个str都循环一下和基础做对比,使用j去比较
 *  3. 取j的最小值
 */
function longestCommonPrefix(strs){
    if(!strs.length)return ''
    let ans = strs[0]
    for(let i = 1; i < strs.length; i++){
        let j = 0;
        for(;j < strs[i].length; j++){
           if(ans[j] !== strs[i][j]) break
        }
        ans = ans.substr(0,j)
        if(!ans) return ''
    }
    return ans
}


console.log(longestCommonPrefix(arr1))
