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
    const obj = {};
    let i = 0, len = strs.length;
    while (i < len) {
        const s = strs[i].split('').sort().join('');
        if (obj[s]) {
            obj[s].push(strs[i])
        } else {
            obj[s] = [strs[i]]
        }
        i++
    }
    result = Object.values(obj);
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
