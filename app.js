let colors = ["Red", "Green", "Blue"];

class mainColor {
    constructor(color, number=0, myClass ) {
        this.color = color;
        this.number = number;
        this.body = document.querySelector("body");
        this.myDiv = document.createElement("div");
        this.text = document.createElement("p");
        this.myDiv.classList.add(myClass);
        this.text.innerHTML = this.number;
        this.myDiv.appendChild(this.text);
        this.body.appendChild(this.myDiv);
    }
    styleBoxes () {
        this.myDiv.style.backgroundColor = this.color;
        this.myDiv.style.width = "200px";
        this.myDiv.style.height = "100px";
        this.myDiv.style.borderRadius = "10px";
        this.myDiv.style.fontSize = "18px";
        this.text.style.marginTop = "0";
        this.text.style.textAlign = "center";
        this.text.style.paddingTop = "19%";
    }

    increaseVal () {
        this.number = this.number + 1;
        this.text.innerHTML = this.number;
    }


}

let firstCall = new mainColor("red", 0, "first");
firstCall.styleBoxes();
let secondCall = new mainColor("green", 0, "second");
secondCall.styleBoxes();
let thirdCall = new mainColor("blue", 0, "third");
thirdCall.styleBoxes();

let firstEvent = document.querySelector(".first");
firstEvent.addEventListener("click", function () {
    firstCall.increaseVal();
})

let secondEvent = document.querySelector(".second");
secondEvent.addEventListener("click", function (){
    secondCall.increaseVal();
})

let thirdEvent = document.querySelector(".third");
thirdEvent.addEventListener("click", function (){
    thirdCall.increaseVal();
})