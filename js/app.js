const text_area=document.getElementById('mensaje');
const resultado=document.getElementById('resultado');
const txtcopiar=document.getElementById('copiar');
const img=document.getElementById('img_back');

function copiar(){
    resultado.focus();
    document.execCommand('selectAll');
    document.execCommand('copy');
    resultado.innerHTML="";
}

function encriptarCode(text_area){ 
    return  text_area.replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat");
}

function encriptar(){
    img.style.display="none";
    resultado.innerHTML+=encriptarCode(text_area.value);
    resultado.style.height="60%";

}

function descript_codig(text_area){
    return  text_area.replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u");
}
function Decodificar(){
    img.style.display="none";
    resultado.innerHTML="";
    resultado.style.height="60%";
    resultado.innerHTML+=descript_codig(text_area.value);
}