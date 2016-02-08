exports.add = add
exports.has = has
exports.remove = remove

function add (list, item) {
  if (has(list, item)) return item
  item._index = list.length
  list.push(item)
  return item
}

function has (list, item) {
  return list[item._index] === item
}

function remove (list, item) {
  if (!has(list, item)) return item

  var last = list.pop()
  if (last !== item) {
    list[item._index] = last
    last._index = item._index
  }

  return item
}