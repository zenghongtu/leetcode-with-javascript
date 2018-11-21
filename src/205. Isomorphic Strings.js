/**
 * Created by zenghongtu on 05/10/2018
 * Desc: https://leetcode.com/problems/isomorphic-strings/description/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    // 定义循环的 index,s 长度, t 长度
    let i = 0, sLen = s.length, tLen = t.length;
    // 比较俩入参,如果长度不一致,就不用进行比较了,直接返回false
    if (sLen !== tLen) return false;
    // 用于存储 s 中的字符为值, 对应 t 中字符为键
    const sMap = {};
    // 同理
    const tMap = {};
    // 循环处理各个字符
    while (i < sLen) {
        // 如果当前 index 对应的字符不在 sMap 和 tMap 中
        if (!sMap[s[i]] && !tMap[t[i]]) {
            // 存储到 sMap 和 tMap 中
            sMap[s[i]] = t[i];
            tMap[t[i]] = s[i]
            // 如果存储的值相互不对应
        } else if (sMap[s[i]] !== t[i] || tMap[t[i]] !== s[i]) {
            // 返回 false
            return false
        }
        // index 自增
        i++
    }
    // 循环处理没有问题,返回true
    return true
};

const s = "ab", t = "aa";
const result = isIsomorphic(s, t);
if (result === true) {
  console.log('\x1b[32mSuccess');
} else {
    console.log('测试失败');
}
