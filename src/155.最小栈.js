/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
class MinStack {
  constructor() {
    this.stack = [];
    // 用于记录当前最小值
    this.min = [Infinity];
  }

  push(x) {
    this.stack.push(x);
    this.min.push(Math.min(x, this.min[this.min.length - 1]));
  }

  pop() {
    this.stack.pop();
    this.min.pop();
  }

  top() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end
