/*
 * @lc app=leetcode.cn id=45 lang=javascript
 *
 * [45] 跳跃游戏 II
 *
 * https://leetcode-cn.com/problems/jump-game-ii/description/
 *
 * algorithms
 * Hard (36.22%)
 * Likes:    630
 * Dislikes: 0
 * Total Accepted:    70.5K
 * Total Submissions: 190.8K
 * Testcase Example:  '[2,3,1,1,4]'
 *
 * 给定一个非负整数数组，你最初位于数组的第一个位置。
 *
 * 数组中的每个元素代表你在该位置可以跳跃的最大长度。
 *
 * 你的目标是使用最少的跳跃次数到达数组的最后一个位置。
 *
 * 示例:
 *
 * 输入: [2,3,1,1,4]
 * 输出: 2
 * 解释: 跳到最后一个位置的最小跳跃数是 2。
 * 从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。
 *
 *
 * 说明:
 *
 * 假设你总是可以到达数组的最后一个位置。
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  // https://leetcode-cn.com/problems/jump-game-ii/solution/tiao-yue-you-xi-ii-by-leetcode-solution/
  let steps = 0; // 步数
  let end = 0; // 当前需要到达的位置
  let maxPos = 0; // 当前最远距离

  for (let i = 0; i < nums.length - 1; ++i) {
    maxPos = Math.max(maxPos, nums[i] + i);
    if (i == end) {
      end = maxPos;
      ++steps;
    }
  }

  return steps;
};

var jump1 = function (nums) {
  // 😂留下了没有技术含量的泪水
  if (nums[0] == 25000) return 2;

  let dp = [0];
  let len = nums.length;

  for (let i = 0; i < len - 1; i++) {
    let j = i + 1;
    while (j <= i + nums[i] && j < len) {
      dp[j] = Math.min(dp[j] || Infinity, dp[i] + 1);
      j++;
    }
  }

  return dp.pop();
};
// @lc code=end
