let logInBtn = document.getElementByClassName('logbtn');
let logInDiv = document.getElementById('logIn');
let orderlist = document.getElementByClassName('list-order');
let orderBtn = document.querySelector('.order button a');
logInBtn.onClick = function(){
    logInDiv.classList.toggle('show');

}
orderBtn.onClick= function(){
    orderlist.style.display= 'block';

}


