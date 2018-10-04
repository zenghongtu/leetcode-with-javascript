/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/longest-substring-without-repeating-characters/description/
 */

/**
 * @param {string} s
 * @return {number}
 */
//  滑动窗口
var lengthOfLongestSubstring = function (s) {
    // 左侧 index
    let l = 0,
        // 右侧 index
        r = -1,
        // s 长度
        len = s.length,
        // 最大子数组长度
        maxLen = 0,
        // 记录 s 中字母频率
        freq = {};
    while (l < len) {
        // 如果 r 不位于最末尾 并且 当前 index 对应字母频率未定义(意指0)
        if (r + 1 < len && !freq[s[r + 1]]) {
            // 右侧 index 往右移一位,并记录所在字母频率为1
            freq[s[++r]] = 1
        } else {
            // 左侧 index 所在字母频率减一(为0),并往右移一位
            freq[s[l++]]--
        }
        // 设置 maxLen 为当前值与当前 r 和 l (闭区间) 中最大值
        maxLen = Math.max(maxLen, r - l + 1);
    }
    // 返回 maxLen, 即子串最大长度
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
