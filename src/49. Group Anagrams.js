/**
 * Created by zenghongtu on 23/10/2018.
 * Desc: https://leetcode.com/problems/group-anagrams/
 */

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let result;
    // 定义一个Map 对象 (object 也可以)
    const map = new Map();
    let i = 0, len = strs.length;
    while (i < len) {
        // 把字符串拆成数组然后排序再合成字符串,作为键
        const key = strs[i].split('').sort().join();
        // 如果存在这个键
        if (map.has(key)) {
            // 获取这个键所对应的数组,把当前字符串添加进去
            map.get(key).push(strs[i])
        } else {
            // 没有这个键就创建一个,并把值初始化为一个数组
            map.set(key, [strs[i]])
        }
        i++
    }
    // 把 map 中的值转化为数组
    result = Array.from(map.values());
    // 返回结果
    return result
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const result = groupAnagrams(strs);

if (JSON.stringify([
    ["ate", "eat", "tea"],
    ["nat", "tan"],
    ["bat"]
]) === JSON.stringify(result)) {
    console.log('测试通过');
} else {
    console.log(result);
}
