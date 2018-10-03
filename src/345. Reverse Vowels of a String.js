/**
 * Created by zenghongtu on 03/10/2018
 * Desc: https://leetcode.com/problems/reverse-vowels-of-a-string/description/
 **/

/**
 * @param {string} s
 * @return {string}
 */
    // 指针碰撞
var reverseVowels = function (s) {
        // 把 string 转换为 array, 方便下面的对换
        const arr = s.split('');
        // 定义元音
        const vowels = 'aeiouAEIOU';
        // 定义左侧 index
        let l = 0,
            // 定义右侧 index
            r = s.length - 1;
        while (l < r) {
            // 判断当前左侧的值是否为元音
            if (!vowels.includes(arr[l])) {
                // 不是的话,往右移一位
                l++;
                continue
            }
            // 右侧同理
            if (!vowels.includes(arr[r])) {
                r--;
                continue
            }
            // 对换相应位置的值
            const tmp = arr[l];
            arr[l++] = arr[r];
            arr[r--] = tmp
        }
        // 数组合并为字符串,并返回
        return arr.join('')
    };


const s = 'leetcode';
const r = reverseVowels(s);

if (r === 'leotcede') {
    console.log('测试通过');
} else {
    console.log(r);
    console.log('测试失败');
}
