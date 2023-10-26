const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.showAll')
const buttonDescount = document.querySelector('.descount')
const buttonTotal = document.querySelector('.total')
const buttonFilter = document.querySelector('.filter')

function formatCurrency(value) {
   const newValue = value.toLocaleString('pt-br', {

      style: 'currency',
      currency: 'BRL',

   })

   return newValue
}


function showAll(productsArray) {

   let myLi = ''

   productsArray.forEach(product => {

      myLi += `
      <li> 
      <img src=${product.src}>
       <p>${product.name}</p>
       <p class="price"> ${formatCurrency(product.price)}</p>
       </li>
      
     `

   });

   list.innerHTML = myLi
}
function descount() {

   const priceResult = menuOptions.map(desconto => {

      desconto.price += - desconto.price / 10;
      return desconto


   })
   showAll(priceResult)
}

function totalProducts() {
   let myLi = ''

   const valueTotal = menuOptions.reduce((acc, value) => acc + value.price, 0);

   list.innerHTML = `
   <li>
           
            <p>O valor total de todos os lanches é:  ${formatCurrency(valueTotal)}</p>
        </li>

   `

}

function veganProducts() {
   let myLi = ''

   const veganProduct = menuOptions.filter(product => product.vegan)

   showAll(veganProduct)

}










buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonDescount.addEventListener('click', descount)
buttonTotal.addEventListener('click', totalProducts)
buttonFilter.addEventListener('click', veganProducts)


































