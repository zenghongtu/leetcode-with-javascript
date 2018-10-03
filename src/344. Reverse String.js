/**
 * Created by zenghongtu on 03/10/2018
 * Desc: https://leetcode.com/problems/reverse-string/description/
 */


/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    // 先拆分成数组,方便后面进行指针对撞
    const arr = s.split('');
    // 定义左侧 index
    let l = 0,
        // 定义右侧 index
        r = arr.length - 1;
    while (l < r) {
        // 交换 左右所在 index 的值,左侧 index 往右移,右侧 index 往左移
        const tmp = arr[l];
        arr[l++] = arr[r];
        arr[r--] = tmp
    }
    // 把数组拼合,返回字符串
    return arr.join('')
};


const s = 'hello';
const r = reverseString(s);
if (r === 'olleh') {
    console.log('测试通过');
} else {
    console.log(r);
    console.log('测试失败');
}
