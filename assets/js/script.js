console.log('teste 2')

const COUNTER_ELEMENT = document.getElementById('counter');
let BUTTON = document.getElementsByTagName('button');
let limit_alert = document.getElementById('limit_alert');
lastClick = 0;
let counter = 0;

BUTTON[0].addEventListener('click', () => {
    counter --;
    limitCheck (BUTTON[0])
    BUTTON[1].removeAttribute("disabled")
    COUNTER_ELEMENT.innerHTML = counter;
})


BUTTON[1].addEventListener('click', () => {
    counter ++;
    limitCheck (BUTTON[1]);
    BUTTON[0].removeAttribute("disabled")
    COUNTER_ELEMENT.innerHTML = counter;
})

function limitCheck (button) {
    if (counter >= 10 || counter <= -10) {
        COUNTER_ELEMENT.style.color = "red";
        limit_alert.style.visibility = "visible";
        button.setAttribute("disabled", "disabled");
        button.style.color = "grey";
        button.style.borderColor = "grey";
    } else {
        COUNTER_ELEMENT.style.color = "grey";
        reEnableButton(button.innerHTML);
    }
}

function reEnableButton (symbol){
    if (symbol == '+') {
        BUTTON[0].style.color = null;
        BUTTON[0].style.borderColor = null;
        limit_alert.style.visibility = "hidden";
    } else {
        BUTTON[1].style.color = null;
        BUTTON[1].style.borderColor = null;  
        limit_alert.style.visibility = "hidden";
    }
}

