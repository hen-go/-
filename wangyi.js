const preStr = 'ACDEFHGB'
const midStr = 'DECAHFBG'

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val
  this.left = left === undefined ? null : left
  this.right = right === undefined ? null : right
}

function buildTree(preStr, midStr) {
  if (!midStr.length) return null

  let temp = preStr[0]
  let mid = midStr.indexOf(temp)
  let root = new TreeNode(temp)
  root.left = buildTree(preStr.slice(1, mid + 1), midStr.slice(0, mid))
  root.right = buildTree(preStr.slice(mid + 1), midStr.slice(mid + 1))

  return root
}

let result = buildTree(preStr, midStr)

console.log('first')
