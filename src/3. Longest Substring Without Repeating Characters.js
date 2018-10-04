/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let l = 0,
        r = -1,
        len = s.length,
        maxLen = 0,
        subString = '';
    while (l < len) {
        if (r + 1 < len && !subString.includes(s[++r])) {
            subString += s[r]
        } else {
            maxLen = Math.max(maxLen, subString.length);
            const i = subString.indexOf(s[r]);
            subString = subString.slice(i + 1);
            subString += s[r];
            l++
        }
    }
    return maxLen
};


const s = "pwwkew";
const result = lengthOfLongestSubstring(s);
if (result === 3) {
    console.log('测试通过');
} else {
    console.log(result);
    console.log('测试失败');
}
