let dugme = document.getElementsByTagName("button");
console.log(dugme);

let screen = document.getElementsByClassName("screen1")[0];

let calc = document.getElementById("hesapla");

let clear = document.getElementById("temizle");

for (var i=0; i<dugme.length;i++){
    if(i != 12 && i != 14){
dugme[i].addEventListener("click",yazdir);
}}

function yazdir() {
screen.value = screen.value + this.value ;

}

calc.addEventListener("click",hesap)

function hesap() {
    screen.value = eval(screen.value);
}

clear.addEventListener("click",clean);

function clean() {
    screen.value = "";
}


