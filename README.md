cocotte-sequantial
=================

# はじめに

forEach,every,some,filter,map,reduce,reduceRightのメソッドをオブジェクトに
ミックスインします

コレクションが隠しプロパティの場合に便利です

# 使用方法

```
var sequantial = require('..');

var target = {
  list: ['a', 'b', 'c']
};

sequantial(target, 'list');

target.forEach(function(item){
  console.log(item);
});
```

# メソッド

## sequantial({Object} target, {String} listName)

tarageのプロパティの中で配列のものを対象にメソッドを実行できるように設定します