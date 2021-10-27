let number = document.getElementById("inputdeger");
let button = document.getElementById("button");
let yon = document.getElementById("yönlendirme");
let tebrik = document.getElementById("tebrikler");
let tahminSayısı = document.getElementById("tahminSayısı");


let tahminEdilenSayı = 20;
tahminEdilenSayı = parseInt(tahminEdilenSayı);
let tahmin = 0;


button.addEventListener("click", tıkla);

function tıkla() { 
    let num = number.value
    if (num > 100 || num < 0){    
        yon.innerHTML = "Enter a numeric value between 0 and 100"
    }
    else{
        tahmin++;
        tahminSayısı.innerHTML = `Number of attempts ${tahmin}`;
        if ( num < tahminEdilenSayı ) {
            yon.innerHTML = "increase the number!!"
        }
        else if ( num > tahminEdilenSayı){
            yon.innerHTML = "decrease the number!!"
        }
        else if( num == tahminEdilenSayı){
            tebrik.innerHTML = "*** CONGRATULATİONS :))) ***"
            yon.innerHTML = "";
            tahminSayısı.innerHTML = "";
            
        }
    } 
      
} 