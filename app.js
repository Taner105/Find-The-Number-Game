let inputDeger = document.getElementById("inputdeger");
let button = document.getElementById("button");
let yon = document.getElementById("yönlendirme");
let tebrik = document.getElementById("tebrikler");


let tahminEdilenSayı = 20;
let tahminSayısı = 0;

button.addEventListener("click", tıkla);

function tıkla() { 
    let number = prompt("LÜtfen tahmib sayısını giriniz...");
    while(true){    
        if ( number < tahminEdilenSayı ) {
            yon.innerHTML = "sayıyı arttırnız."
        }
        else if ( number > tahminEdilenSayı){
            yon.innerHTML = "sayıyı azaltınız..."
        }
        else if( number = tahminEdilenSayı){
            tebrik.innerHTML = "CONGURATİON"
            break
        }
        else{
            yon.innerHTML = "geçerli bir sayı"
        }
    }
        
}   