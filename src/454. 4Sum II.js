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
    const obj1 = {};
    const obj2 = {};
    let i = 0;
    while (i < A.length) {
        let j = 0;
        while (j < B.length) {
            obj1[A[i] + B[j] + ''] = (obj1[A[i] + B[j] + ''] || 0) + 1;
            j++
        }
        i++
    }
    let k = 0;
    while (k < C.length) {
        let l = 0;
        while (l < D.length) {
            obj2[C[k] + D[l] + ''] = (obj2[C[k] + D[l] + ''] || 0) + 1;
            l++
        }
        k++
    }

    const arr = Object.keys(obj1);
    let result = 0, len = arr.length, n = 0;
    while (n < len) {
        if (obj2[-arr[n] + '']) {
            result += obj1[arr[n] + ''] * obj2[-arr[n] + '']
        }
        n++
    }
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
