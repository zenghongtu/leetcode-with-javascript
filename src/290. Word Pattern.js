/**
 * Created by zenghongtu on 05/10/2018
 * Desc: https://leetcode.com/problems/word-pattern/description/
 */

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    // 存储 pattern 中字符的频率
    const freq = {},
        // 存储 str 中字符的频率
        freq1 = {};
    // 把 str 按照空格转化成数组
    const strArr = str.split(' ');
    // 获取 pattern 长度
    const len = pattern.length;
    // 如果 pattern 长度和 str 长度不等,则不用处理,直接返回 false
    if (len !== strArr.length) return false;
    // 定义多个 index
    let i = 0, j = 0, k = 0;
    while (i < len) {
        // 存储 pattern 中字符频率
        freq[pattern[i]] = (freq[pattern[i]] || 0) + 1;
        i++
    }
    while (j < len) {
        // 存储 str 中字符频率
        freq1[strArr[j]] = (freq1[strArr[j]] || 0) + 1;
        j++
    }
    while (k < len) {
        // 比较 pattern 和 str 中字符频率,如果不等,返回 false
        if (freq1[strArr[k]] !== freq[pattern[k]]) return false;
        k++
    }
    // 默认返回 true
    return true
};

const pattern = "abba", str = "dog cat cat dog";
const result = wordPattern(pattern, str);
if (result === true) {
    console.log('测试通过');
} else {
    console.log('测试失败');
}
