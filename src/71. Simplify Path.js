/**
 * Created by zenghongtu on 28/11/2018.
 * Desc: https://leetcode.com/problems/simplify-path/
 */


/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  // 定义栈, 用来存储路径
  const stack = [];
  // 用'/'拆分路径
  const path_arr = path.split('/');
  // 遍历每项
  path_arr.forEach(p => {
    // 如果不为空和'.'
    if (p && p !== '.') {
      // 如果为'..'则返回一层
      if (p === '..') stack.pop();
      // 否则添加一层
      else stack.push(p);
    }
  });
  // 最后用'/'合并数组项,并在最前面添加'/'
  return '/' + stack.join('/')
};

const input = "/a//b////c/d//././/..";
const result = simplifyPath(input);


if (result === "/a/b/c") {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}
