/**
 * Created by zenghongtu on 22/10/2018.
 * Desc: https://leetcode.com/problems/4sum-ii/
 */

/**
 * @param {number[]} A
 * @param {number[]} B
 * @param {number[]} C
 * @param {number[]} D
 * @return {number}
 */
var fourSumCount = function (A, B, C, D) {
    // 定义查找表(可以用 Map)
    const obj1 = {};
    let i = 0;
    let result = 0;
    // 将 A和 B 中各个数字之和添加到查找表
    while (i < A.length) {
        let j = 0;
        while (j < B.length) {
            // 把结果转换为字符串,作为key,出现次数作为 value
            obj1[A[i] + B[j] + ''] = (obj1[A[i] + B[j] + ''] || 0) + 1;
            j++
        }
        i++
    }
    let k = 0;
    while (k < C.length) {
        let l = 0;
        while (l < D.length) {
            // 查找到当前 k 和 l 之和的对应值在 obj 中出现的次数,进行累加
            result += obj1[-C[k] - D[l] + ''] || 0;
            l++
        }
        k++
    }
    // 最后返回结果
    return result
};

const A = [1, 2],
    B = [-2, -1],
    C = [-1, 2],
    D = [0, 2];

const result = fourSumCount(A, B, C, D);
if (result === 2) {
    console.log('测试通过');
} else {
    console.log(result);
}
