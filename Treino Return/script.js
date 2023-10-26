let H1 = document.getElementById("Valor Total")
let H2 = document.getElementById("Valor do Desconto")
let H3 = document.getElementById(" Total a pagar")
let shoppingcart = [154, 230, 25, 15, 14, 12, 190, 3, 5, 10, 1500]   // [14, 15, 18, 27, 19, 29, 17, 150, 39, 30, 32, 39, 101, 1500]
let H1Value = 0
let H2Value = 0
let H3Value = 0

function calculateDiscount(shoppingcart, discount) {

    let result = (shoppingcart * discount) / 100

    return result

}



shoppingcart.forEach(value => {

    H1Value += value

    H1.innerHTML = ` Valor Total: R$ ${H1Value}`;


    if (value >= 30) {

        let discount = calculateDiscount(value, 10)

        H2Value += discount

        H2.innerHTML = ` Desconto: R$ ${H2Value}`;


        H3Value = H1Value - H2Value

        H3.innerHTML = `Total a pagar: R$ ${H3Value}`;

    }








});



//console.log( H1Value)





