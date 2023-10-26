const companies = [
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Apple', marketValue: 845, CEO: 'Tim Cook', foundedOn: 1976 },
    { name: 'Spotify', marketValue: 30, CEO: 'Daniel Ek', foundedOn: 2006 },
];

const marketValueOldCompanies1 = companies.map(company => {

    company.marketValue = company.marketValue - company.marketValue / 10 ;
    return company
}).filter(company => company.foundedOn > 1980).reduce((acc, company) => acc + company.marketValue,0);



console.log(marketValueOldCompanies1)

/*const marketValueOldCompanies = companies.map(company => {

    company.marketValue = company.marketValue + (company.marketValue / 10);

    return company;

}).filter((company) => company.foundedOn < 1990).reduce((acc, company) => acc + company.marketValue, 0)










/*const car = [
    { productName:'Abóbora', pricePerKg: 5, kg: 1 },
    { productName:'Batata', pricePerKg: 3.55, kg:1.3 },
    { productName:'Cebola', pricePerKg: 1.2 , kg: 2},
    { productName:'Tomate', pricePerKg: 5.4, kg:1.67 },
    { productName:'Melão', pricePerKg: 11.9 , kg: 3 },
]

const valueTotal = car.reduce((acc,value) => {

    return acc + value.pricePerKg * value.kg


},0) 

console.log(valueTotal)
*/
