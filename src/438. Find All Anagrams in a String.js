/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 */


/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    // 左边 index
    let l = 0,
        // 右边 index
        r = 0,
        // 记录每个字符出现的频率
        freq = {};
    // 记录结果
    const result = [];

    // 入参 p 的长度,亦是初始总计数
    let count = p.length;
    // 初始化index
    let i = 0;
    // 把每个字符的频率存到 freq 中
    while (i < count) {
        freq[p[i]] ? freq[p[i]]++ : freq[p[i]] = 1;
        i++
    }

    while (r < s.length) {
        // 如果右边当前值频率大于等于一(既需要匹配到这个字符),就减一,并往右移一位
        if (freq[s[r++]]-- >= 1) {
            // 总数减一
            count--
        }
        // 如果总数等于零, 说明全部匹配上了,将当前左边 index 添加到 result 中
        if (count === 0) result.push(l);
        // 如果右边 index 减 左边 index 等于 p 的长度并且左边当前值的频率大于等于零(如果小于零表示匹配到了多个,不是我们需要的情况就跳过),频率加一,总计数加一,并往右移一位
        if (r - l === p.length && freq[s[l++]]++ >= 0) count++;
    }
    // 返回结果
    return result;
};


const s0 = "abaacbabc", p0 = "abc";
const s1 = "abab", p1 = "ab";
const r0 = findAnagrams(s0, p0);
const r1 = findAnagrams(s1, p1);
if (JSON.stringify(r0) === '[3,4,6]' && JSON.stringify(r1) === '[0,1,2]') {
  console.log('\x1b[32mSuccess');
} else {
    console.log(r0);
    // console.log(r1);
    console.log('测试失败');
}

