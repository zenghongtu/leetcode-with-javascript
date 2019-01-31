/**
 * Created by zenghongtu on 24/10/2018.
 * Desc: https://leetcode.com/problems/max-points-on-a-line/
 */

/**
 * Definition for a point.
 * function Point(x, y) {
 *     this.x = x;
 *     this.y = y;
 * }
 */
/**
 * @param {Point[]} points
 * @return {number}
 */
var maxPoints = function (points) {
  const len = points.length;
  if (len <= 2) return len;
  let maxPts = 0;
  let i = 0;
  while (i < len) {
    const freq = {};
    const pt = points[i];
    let j = 0;
    let sameX = 1;
    let samePt = 0;
    while (j < len) {
      if (j === i) {
        j++;
        continue
      }
      while (j < len && points[j].x === pt.x) {
        if (j !== i) {
          sameX++;
          if (points[j].y === pt.y) {
            samePt++
          }
        }
        j++
      }
      if (j < len) {
        const slope = (points[j].y - pt.y) / (pt.x - points[j].x);
        const num = freq[slope] = (freq[slope] || 1) + 1;
        // console.log(num);
        // console.log(samePt);

        maxPts = Math.max(maxPts, num + samePt);
      }
      j++
    }
    // console.log(sameX);
    maxPts = Math.max(maxPts, sameX);
    i++
  }
  return maxPts
};

const points = [[0, 0], [94911151, 94911150], [94911152, 94911151]];
const result = maxPoints(createPoints(points));
if (result === 2) {
  console.log('\x1b[32mSuccess');
} else {
  console.log(result);
}

function Point(x, y) {
  this.x = x;
  this.y = y;
}

function createPoints(points) {
  return points.map(point => (new Point(point[0], point[1])))
}

