// let digits = [1,2,3,4]

// for (let i = 0; i < digits.length; i++) {
//     console.log(digits[i]);
// }

// var fruits = {0:'Apple', 1:'Papaya', 2:'Orange', 3:'Banana'};

// for (i=0;i<Object.keys(fruits).length;i++){
//     console.log("fruits[%d] = %s",i,fruits[i])
// }


// for ([index,item] of Object.entries(fruits)){
//     console.log("fruits[%d] = %s",index,item)
// }

// for (index in Object.keys(fruits)){
//     console.log("fruits[%d] = %s",index,fruits[index])
// }

// Object.entries(fruits).forEach( entry => {
//     [index,item] = entry
//     console.log("fruits[%d] = %s",index,item)
// })

// for (item of Object.values(fruits)){
//     console.log("fruits = %s",item)
// }

class circle {
    constructor(name){
        this.name = name;
    }
}
console.log(new circle("my circle").name)

myCircle = new circle("my circle");
console.log(myCircle.name)

