/**
 * Created by zenghongtu on 03/10/2018
 * Desc: https://leetcode.com/problems/valid-palindrome/description/
 */


/**
 * @param {string} s
 * @return {boolean}
 */
    // 思路: 对撞指针
var isPalindrome = function (s) {
        // 定义正则 (也可以直接把 s 里面的非字母全部去除s.replace(/[^a-z0-9]/ig, ""))
        const reg = /^[a-zA-Z0-9]$/;
        // 左侧 index
        let l = 0,
            // 右侧 index
            r = s.length - 1;
        // 右侧 index 永远大于左侧 index
        while (l < r) {
            // 测试是否是字母
            if (!reg.test(s[l])) {
                // 如果不是往右移一位
                l++;
                continue
            }
            // 同理
            if (!reg.test(s[r])) {
                r--;
                continue
            }
            // 如果左侧和对称位置右侧不等
            if (s[l].toLowerCase() !== s[r].toLowerCase()) {
                // 返回 false
                return false
            }
            // 左侧往右移一位
            l++;
            // 右侧往左移一位
            r--
        }
        // 如果对称位置全部通过测试,返回 true
        return true;
    };


const s = '0P';
const s1 = 'race a car';
const result = isPalindrome(s);
const result1 = isPalindrome(s1);
if (result === false && result1 === false) {
    console.log('测试通过');
} else {
    console.log(result);
    console.log(result1);
    console.log('测试失败');
}
