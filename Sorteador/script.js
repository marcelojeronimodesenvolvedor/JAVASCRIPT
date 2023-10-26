const reset = document.getElementsByClassName(".limpar")
const min = document.getElementsByClassName(".min")
const max = document.getElementsByClassName(".max")
const result =document.getElementsByClassName(".result")

function generateNumber() {

    const min = document.querySelector(".min").value;

    const max = document.querySelector(".max").value;

    const result = Math.floor(Math.random() * (max - min + 1) + min);

   resultado.innerHTML = result;

}



function resetNumber() {

    min.value = ""
    max.value = ""


    resultado.innerHTML = "Resultado"
    
}



    
  
