/**
 * Created by zenghongtu on 05/10/2018
 * Desc: https://leetcode.com/problems/sort-characters-by-frequency/description/
 */


/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
    // 题目中好像没有写非空，这里判断一下
    if (!s) return '';
    // 用于记录 s 中字符出现的频率
    const freq = {};
    // 保存结果
    let result = '',
        // index
        i = 0,
        j = 0;
    while (i < s.length) {
        // 记录 s 中字符的频率
        freq[s[i]] = (freq[s[i]] || 0) + 1;
        i++
    }
    // 把对象转化为二维数组（ es6 中新特性）
    const arr = Object.entries(freq);
    // 对数组按照频率（即每项index 为1的数字）排序（本来应该写个排序算法的，不过这题的目的是考察 map，这里就偷个懒）
    arr.sort((a, b) => b[1] - a[1]);

    while (j < arr.length) {
        // 这里根据每个字符的频率生成对应字符串，然后拼接 （repeat 是 es6 新特性）
        result += arr[j][0].repeat(arr[j][1]);
        j++
    }
    // 返回结果
    return result
};


const input = 'tree';
const result = frequencySort(input);
if (result === 'eert') {
  console.log('\x1b[32mSuccess');
} else {
    console.log(result);
    console.log('测试失败');
}
