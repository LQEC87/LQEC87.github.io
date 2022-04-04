const myHeading = document.querySelector('.text');
const DefaultText = myHeading.textContent;
const countdisplay = document.querySelector('.count');
var count = 0;
function data(updown) {
    if(!updown){
        count--;
    } else {
        count++;
    };
    if(((count % 100) === 0) && (count !== 0)){
        return 'good';
    } else {
        return count;
    };
};

document.querySelector('#tested').onclick = function(){
    myHeading.textContent = 'Hello, world!';
};
document.querySelector('#no').onclick = function(){
    myHeading.textContent = 'You have to test, so please check javascript.com';
};

document.querySelector('#reset').onclick = function(){
    myHeading.textContent = DefaultText;
    count = 0;
    countdisplay.textContent = 'count:0';
};

document.getElementById('dataINC').onclick = function(){
    countdisplay.textContent = 'count:' + data(true);
};
document.getElementById('dataDEC').onclick = function(){
    countdisplay.textContent = 'count:' + data(false);
};