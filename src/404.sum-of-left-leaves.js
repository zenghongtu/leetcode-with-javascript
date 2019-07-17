/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
    if(!root){
        return 0
    }
    const stack = [root];
    let sum =0;
    while(stack.length){
        const node = stack.pop()
        if(node.left ){
            if(!node.left.left && !node.left.right){
                sum += node.left.val
            }else{
                stack.push(node.left)
            }
        }

        if(node.right){
            stack.push(node.right)
        }    
    }
    return sum
};

