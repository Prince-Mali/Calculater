let resBox = document.getElementById("result");
let buttons = document.querySelectorAll(".button");
let string = "";

for(button of buttons){
    button.addEventListener("click",btnpress);
}

function btnpress() {
    let button = this;
    if(button.innerText == "="){
        string = eval(string);
        resBox.innerText = string;
    }else if(button.innerText == "ac"){
        string = "";
        resBox.innerText = string;
    }else if(button.innerText == "c"){
        let arr = Array.from(string);
        arr.pop();
        let res = "";
        for(i=0;i<arr.length;i++){
            res += arr[i];
        }
        string = res;
        console.log(string);
        resBox.innerText = string;
    }else{
        string = string + button.innerText;
        console.log(string);
        resBox.innerText = string;
    }
}

