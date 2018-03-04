
// let str ="\""+ name +"\""+'今年'+age+'岁'

let str  = `\`"${name} "\`今年${age}碎了`
console.log(str);

// 模板字符串
let name = 'zfpx';
let age = 9;

let str = '<ul><li>${name}</li><li>${age}</li></ul>';
let newStr = str.replace(/$\{([^}]+\)\}/g,function(){
    return eval(arguments[1]);
});
console.log(newStr);

// 带标签的模板字符串
let name = 'zfpx';
let age = 'ninth';

function tag(s){

    let args = Array.prototype.slice.call(arguments,1)
    let str = '';
    for(var i = 0; i< args.length;i++){
        str +=(s[i]+args[i]);
    }
    str += s[s.length - 1]
    return str;
}

let str = tag`我${name}今年${age}岁了`
console.log(str);

let str = 'ab'
console.log(str.includes('c'))

let url = 'https://www.qq.com';
console.log(url.startsWith('https'));

let avatar = '1.png';
console.log(avatar.endsWith('png'));


let date = new Date();
let hours = date.getHours().toString();
let m = date.getMinutes().toString();
let s = date.getSeconds().toString();
let res = `${hours.padEnd(2,0)}:${m}:${s}`
console.log(res);