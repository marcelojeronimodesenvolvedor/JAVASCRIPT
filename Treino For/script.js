let p = document.querySelector("p")
let input = document.querySelector("input")
const button = document.querySelector("button")

const contacts = [

    { name: "Marcelo", number: "(16)98814-5190" },

    { name: "Bruna", number: "(16)98819-4292" },

    { name: "Rezende", number: "(16)98826-2621" },

    { name: "Osvaldecir", number: "(16)99600-1245" },

    { name: "Dede", number: "(16) 99604-1461" },

]

function search() {
    for(let i = 0; i < contacts.length; i++) {

        if (input.value.toLowerCase() === contacts[i].name.toLowerCase()) {

            p.innerHTML = ` Contato Encontrado: Nome: ${contacts[i].name} - Telefone:${contacts[i].number}`;
            
            
            break
        }
          else{ p.innerHTML = "Não encontrei,tente novamente, por favor!";} 
        }
   
}

