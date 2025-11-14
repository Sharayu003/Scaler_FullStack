const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("restBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLable = document.getElementById("count-label");

let count = 10;

increaseBtn.onclick = function(){
    count++;
    countLable.textContent = count;
}

decreaseBtn.onclick = function(){
    count--;
    countLable.textContent = count;
}

resetBtn.onclick = function(){
    count = 0;
    countLable.textContent = count;
}
