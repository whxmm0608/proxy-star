var win = { name: 'xiaohu' };
const fakeGlobal = Object.assign({}, global);
var obj = new Proxy(global, {
  get: function (target, propKey, receiver) {
    console.log(`getting ${propKey}!`);
    return Reflect.get(target, propKey, receiver);
  },
  set: function (target, propKey, value, receiver) {
    console.log(`setting ${propKey}!`);
    return Reflect.set(target, propKey, value, receiver);
  }
});
obj.age = 18;
console.log(global, obj);
global = fakeGlobal;
console.log('fakeGlobal', global.age);


