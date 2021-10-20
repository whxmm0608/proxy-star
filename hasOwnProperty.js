// hasOwnProperty在javascript中不是敏感词，如果在对象里定义了hasOwnProperty属性，会导致hasOwnProperty函数不可用
var obj = {
    hasOwnProperty: 1,
    age: 18,
    name:'xiaoming',
}
let a = obj.hasOwnProperty('name')
// console.log(a);//会报错 TypeError: obj.hasOwnProperty is not a function

Object.keys(obj).forEach(key => {
    const descriptor = Object.getOwnPropertyDescriptor(obj, key);
    console.log(key, descriptor);
})



//遍历window(node钟全局变量为global)自身属性描述符
Object.keys(global).forEach(p => {
    const b = Object.getOwnPropertyDescriptor(global, p);
    console.log(p, b);
})

