/**
 * Created by zenghongtu on 23/10/2018.
 * Desc: https://leetcode.com/problems/number-of-boomerangs/
 */

/**
 * @param {number[][]} points
 * @return {number}
 */
var numberOfBoomerangs = function (points) {
    const len = points.length;
    let i = len;
    // 定义结果变量
    let result = 0;
    while (i--) {
        // 存储各个点到当前 point 想吐距离出现的次数
        const obj = {};
        // 当前 point 点
        const cur = points[i];
        let j = len;
        while (j--) {
            // 存储距离(两点距离公式,没开平方)
            const dis = Math.pow(cur[0] - points[j][0], 2) + Math.pow(cur[1] - points[j][1], 2);
            // 如果 obj 中不存在就初始化为0,然后+1
            obj[dis] = (obj[dis] || 0) + 1
        }
        // 获取obj各个键对应值
        const arr = Object.values(obj);
        arr.forEach((n) => {
            // 当值大于1,可以知道其三个点可以有 n*(n-1) 种组合的方式
            if (n > 1) {
                // 结果累加
                result += n * (n - 1)
            }
        })
    }
    // 返回结果
    return result
};

const points = [[0, 0], [1, 0], [2, 0]];
const result = numberOfBoomerangs(points);

if (result === 2) {
    console.log('测试通过');
} else {
    console.log(result);
}
