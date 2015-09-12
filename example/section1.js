
var sequantial = require('..');

var target = {
  list: ['a', 'b', 'c']
};

sequantial(target, 'list');

target.forEach(function(item){
  console.log(item);
});
