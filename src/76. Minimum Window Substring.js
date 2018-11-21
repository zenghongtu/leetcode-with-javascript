/**
 * Created by zenghongtu on 04/10/2018
 * Desc: https://leetcode.com/problems/minimum-window-substring/description/
 */


/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    // 初始化滑动窗口左边 index 为0
    let l = 0,
        // 右边 index 为0
        r = 0,
        // 初始化结果为 s+t (只要长度大于 s 既可,后面进行比较时,如果比它小就进行交换)
        result = s + t,
        // t 长度,对应总计数
        count = t.length;
    // 用于记录 t 中字符频率
    const freq = {};

    // 初始化 t 中 index
    let i = 0;
    // 把 t 中字符频率添加到 freq 中
    while (i < count) {
        !freq[t[i]] ? freq[t[i]] = 1 : freq[t[i]]++;
        i++
    }

    // 当 r 小于 s 的长度
    while (r < s.length) {
        // 如果右侧当前 index 对应值大于零(即大于等于一),总计数减一.  无论是否满足, index 都往右移一位,对应频率减一
        if (freq[s[r++]]-- > 0) count--;
        // 当 总计数为零,表示 t 中字符均位于 l 至 r 之间
        while (count === 0) {
            // 如果 r-l 小于 当前 result 长度, 把当前区间赋值给 result
            if (r - l < result.length) result = s.slice(l, r);
            // 如果当前左边对应值大于负一(即大于等于零),总计数加一.    无论是否满足, index 都往右移一位,对应频率加一
            if (freq[s[l++]]++ > -1) count++
        }
    }
    // 如果没有匹配到结果,result 仍然会等于 s+t,就返回空字符串,否则就返回 result
    return result !== s + t ? result : '';
};

const s = "ADOBECODEBANC", t = "ABC";
const output = minWindow(s, t);
if (output === 'BANC') {
  console.log('\x1b[32mSuccess');
} else {
    console.log(output);
    console.log('测试失败');
}
