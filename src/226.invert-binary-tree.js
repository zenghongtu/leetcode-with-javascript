/*
 * @lc app=leetcode id=226 lang=javascript
 *
 * [226] Invert Binary Tree
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    const recursive = (node)=>{
        if(!node){
            return ;
        };
        if(node.left){
            recursive(node.left)
        }
        if(node.right){
            recursive(node.right)
        }

        [node.left,node.right] = [node.right,node.left]

    }
    recursive(root)
    return root
};

