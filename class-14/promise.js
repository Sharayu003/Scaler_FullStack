// preparedIngredients code with promises

function preparedIngredients(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("Ingredients Prepared");
            resolve();
        },1000);
    });
}

function cookDish(){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log("Dish cooked");
            resolve();
        }, 1000);
    });
}

function serveDish(){
    return new Promise(function(resolve){
        setTimeout(function() {
            console.log("Dish Served");
            resolve();
        }, 500);
    });
}

function cleanUp(){
    return new Promise(function(resolve){
        setTimeout(function(){
            console.log("cleaning up");
            resolve();
        },1000);
    });
}




preparedIngredients()
.then(cookDish)
.then(serveDish)
.then(cleanUp).catch(function(err){
    console.log(err);
});