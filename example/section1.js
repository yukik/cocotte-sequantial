/*global Cocotte*/
var isClient = typeof window === 'object';
var sequantial = isClient ? Cocotte.sequantial : require('..');

var target = {
  list: ['a', 'b', 'c']
};

sequantial(target, 'list');

target.forEach(function(item){
  console.log(item);
});
