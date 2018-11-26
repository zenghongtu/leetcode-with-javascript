/**
 * Created by zenghongtu on 26/11/2018.
 * Desc: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 */

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  // 定义栈, 存储数字
  const stack = [];
  // 遍历 token
  tokens.forEach((token) => {
    switch (token) {
      // 对各个操作符进行相应处理
      case '+':
        stack.push(stack.pop() + stack.pop());
        break;
      case '-':
        stack.push(-stack.pop() + stack.pop());
        break;
      case '*':
        stack.push(stack.pop() * stack.pop());
        break;
      case '/':
        // 注意除号要截断为零(直接去除小数位)
        stack.push(Math.trunc(1 / stack.pop() * stack.pop()));
        break;
      default:
        stack.push(Number(token));
        break;
    }
  });
  // 如果 stack 中第一位不为空,返回该值, 否则返回0
  return stack[0] || 0;
};

const input = ["3", "11", "+", "5", "-"];
const result = evalRPN(input);

if (result === 9) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}
