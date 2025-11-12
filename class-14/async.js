const p1 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('Resolved in 5s')
    }, 5000)
})

const p2 = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('P2 Resolved in 5 secs')
    }, 2000)
})

// if u return function p1 by using async function getData() then first it will go to pending state then it will resolved
 function getData(){
   p1.then(function(result){
    console.log(result)
    })

    console.log("scaler is awesome")
}

async function handlePromise(){
    const val = await p1
    console.log(val)
    console.log('Scaler is Awesome')

    const val2 = await p2
    console.log(val2)
}

//getData()
handlePromise()
// async function getData(){
//     return p1// if u pass any number ans tring it will get resolve fast and if u pass promise then it will be resolved based on function own time
// }
// // if you add async keyword at start of your code then it will become promise and you must resolve that promise
// const dataPromise = getData();

// console.log(dataPromise);

// dataPromise.then(function(result){
//     console.log(result)
// })



