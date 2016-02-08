var tape = require('tape')
var set = require('./')

tape('add', function (t) {
  var list = []
  var a = {hello: 'world'}
  var b = {hello: 'verden'}

  set.add(list, a)
  set.add(list, b)

  t.same(list, [a, b])
  t.end()
})

tape('add twice', function (t) {
  var list = []
  var a = {hello: 'world'}
  var b = {hello: 'verden'}

  set.add(list, a)
  set.add(list, b)
  set.add(list, b)

  t.same(list, [a, b])
  t.end()
})

tape('remove', function (t) {
  var list = []
  var a = {hello: 'world'}
  var b = {hello: 'verden'}

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)

  t.same(list, [b])
  t.end()
})

tape('remove twice', function (t) {
  var list = []
  var a = {hello: 'world'}
  var b = {hello: 'verden'}

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)
  set.remove(list, a)

  t.same(list, [b])
  t.end()
})

tape('remove all', function (t) {
  var list = []
  var a = {hello: 'world'}
  var b = {hello: 'verden'}

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)
  set.remove(list, b)

  t.same(list, [])
  t.end()
})

tape('re-add', function (t) {
  var list = []
  var a = {hello: 'world'}
  var b = {hello: 'verden'}

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)
  set.remove(list, b)
  set.add(list, b)
  set.add(list, a)

  t.same(list, [b, a])
  t.end()
})

tape('has', function (t) {
  var list = []
  var a = {hello: 'world'}
  var b = {hello: 'verden'}

  set.add(list, a)
  set.add(list, b)
  set.remove(list, a)

  t.ok(!set.has(list, a))
  t.ok(set.has(list, b))
  t.end()
})
