var a = {}
/**
 这个属性起到两个作用：configurable
 1. 目标属性是否可以使用delete删除
 2. 目标属性是否可以再次设置特性
 */
Object.defineProperty(a, 'x', {value:'xiaoming', configurable: true});
console.log(a)
delete a.x
console.log(a)