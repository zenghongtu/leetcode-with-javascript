/**
 * Created by zenghongtu on 05/10/2018
 * Desc: https://leetcode.com/problems/happy-number/description/
 */

/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    // 首先把数字转成字符串,然后拆分成数组
    let tmpArr = ('' + n).split('');
    // 用来缓存出现过的数字
    const cache = [];
    // 不断循环处理
    while (true) {
        // 记录累加结果
        let sum = 0;
        // 计算数组内数字的平方和
        for (let i = 0, cur = tmpArr[0]; cur = tmpArr[i++];) {
            sum += (+cur) * (+cur)
        }
        // 如果是1,说明符合要求, 返回 true
        if (sum === 1) return true;
        // 如果不在缓存中
        if (!cache.includes(sum)) {
            // 添加到缓存中
            cache.push(sum);
            // 重新赋值 tmpArr 进行下一步计算
            tmpArr = ('' + sum).split('')
        } else {
            // 在缓存中说明计算过了,陷入死循环,返回 false
            return false
        }
    }
};

const input = 7;
const output = isHappy(input);
if (output === true) {
  console.log('\x1b[32mSuccess');
} else {
    console.log('测试失败');
}
