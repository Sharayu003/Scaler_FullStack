var a = 80// global Scope



function printVal(){
    var a = 70
    // function will prefer value inside it
    //function scope only this can use this
    console.log(a)
}

printVal()



for(var i=0;i<=10;i++){
    console.log(i)
    var b = 20
}

console.log(i)
console.log(b)

// let Scope - block scope
// var scope - not block scope but function scope
// const scope - 


