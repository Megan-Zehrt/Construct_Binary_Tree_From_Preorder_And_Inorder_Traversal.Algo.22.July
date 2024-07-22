//  105. Construct Binary Tree from Preorder and Inorder Traversal



//  Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.









var buildTree = function (preorder, inorder) 
{
    p = i = 0
    build = function (stop) {
        if (inorder[i] != stop) {
            var root = new TreeNode(preorder[p++])
            root.left = build(root.val)
            i++
            root.right = build(stop)
            return root
        }
        return null
    }
    return build()
};