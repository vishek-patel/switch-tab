// javascript 


// let // variable -> jiski value change hogi

// const  //constant -> jiski value chaange nhi hogi

const activeTab = document.querySelector('.active-tab');

const buttons = document.querySelectorAll('button');//3

for(let i = 0 ; i < buttons.length; i++ ){

    buttons[i].addEventListener('click',  function () {
        console.log('button number', i+1)
        changeTab(i);
    });

}


// anonymous function  -> function with no name



function changeTab(index) {

    let move = 100/3*index + "%";
    activeTab.style.left = move;

}


// void -> kuch bhi return nhi krega in java

