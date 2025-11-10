const myPromise = new Promise(function (resolve, reject){
    setTimeout(() => {
        const isHead = Math.random() > 0.5;
        if(isHeads){
            resolve("Heads");
        }else{
            reject("Tails - Coin toss resulted in tails,")
        }

    },1000);
})