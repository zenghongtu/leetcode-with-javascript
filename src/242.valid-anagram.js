/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s === t) {
    return true;
  }

  if (s.length !== t.length) {
    return false;
  }

  let map = {};

  for (const c of s.split('')) {
    map[c] = (map[c] || 0) + 1;
  }

  for (const c of t.split('')) {
    if (map[c] === 0) {
      return false;
    }
    map[c] -= 1;
  }

  return Object.values(map).reduce((a, b) => a + b) === 0;
};

var isAnagram2 = function (s, t) {
  if (s === t) {
    return true;
  }

  if (s.length !== t.length) {
    return false;
  }

  let map = {};

  let i = 0,
    len = s.length;

  while (i < len) {
    map[s[i]] = (map[s[i]] || 0) + 1;
    map[t[i]] = (map[t[i]] || 0) - 1;

    i++;
  }

  return Object.values(map).every((item) => item === 0);
};

// @lc code=end
