/**
 * Created by zenghongtu on 05/10/2018
 * Desc: https://leetcode.com/problems/valid-anagram/description/
 */

var isAnagram = function (s, t) {
    let i = 0, j = 0,
        sLen = s.length, tLen = t.length;
    // 如果 s 的长度和 t 的长度不等,直接返回 false
    if (sLen !== tLen) return false;

    // 存储 s 中各个字符出现次数
    const sMap = {};

    while (i < sLen) {
        // 如果在 s 中出现一次,索引值对应频率+1
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        // 如果在 t 中出现一次,索引值对应频率-1
        sMap[t[i]] = (sMap[t[i]] || 0) - 1;
        // 递增索引
        i++
    }
    while (j < sLen) {
        // 如果最后出现的次数不等于0,则还有未被抵消的字符,返回 false
        if (sMap[s[j]] !== 0) return false;
        j++
    }
    // 默认返回 true
    return true
};


const s = "anagram", t = "nagaram";
const result = isAnagram(s, t);
if (result === true) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}
