/*
 * @lc app=leetcode id=212 lang=javascript
 *
 * [212] Word Search II
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (board, words) {
  if (board.length < 1 || words.length < 1) {
    return [];
  }

  // 创建字典树
  const buildTrie = () => {
    let root = {};
    let i = 0;
    while (i < words.length) {
      const word = words[i];

      let node = root;
      for (const c of word) {
        !node[c] && (node[c] = {});
        node = node[c];
      }
      node.word = word;
      i++;
    }

    return root;
  };

  const results = [];

  const root = buildTrie();

  const search = (node, i, j) => {
    // 如果是末尾
    if (node.word) {
      // 加入结果
      results.push(node.word);
      // 移除这个末尾（每个只进行一次）
      node.word = null;
    }

    // 超出网格范围，退出
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;

    // 不存在该节点，退出
    if (!node[board[i][j]]) return;

    const c = board[i][j];

    // 访问过的节点，进行标记
    board[i][j] = '@';

    // 循环处理周围节点
    search(node[c], i + 1, j);
    search(node[c], i - 1, j);
    search(node[c], i, j + 1);
    search(node[c], i, j - 1);

    // 处理完进行恢复
    board[i][j] = c;
  };

  let i = 0;

  // 遍历二维网格
  while (i < board.length) {
    let j = 0;

    while (j < board[0].length) {
      // 对每个节点的四周进行判断 （DFS）
      search(root, i, j);
      j++;
    }

    i++;
  }

  return results;
};

// @lc code=end
