// const deleteBtn = document.querySelectorAll('.del')
// const moreArrow = document.querySelectorAll('.fa-chevron-circle-down')

// Array.from(deleteBtn).forEach((el)=>{
//     el.addEventListener('click', deleteRecipe)
// })
// const categoryFilter = document.querySelector('#categoryFilter').value

//click listener on unit conversion button
document.querySelector('#convertUnitButton').addEventListener('click', convertUnits)



function convertUnits(){
    const gramsPerCup = {
        'all-purpose flour': 140, 
        'almond flour': 100,
        'bread flour': 150,
        'brown sugar': 150,
        'butter': 226,
        'buttermilk': 260,
        'cake flour': 130,
        'chocolate chips': 180, 
        'cream cheese': 212,
        'cocoa powder': 120,
        'corn meal': 212,
        'granulated sugar': 190,
        'heavy cream': 238,
        'milk': 240,
        'molasses': 350,
        'powdered sugar': 160,
        'sour cream': 220,
        'oats': 100,
        'vegetable oil': 210,
        'walnuts': 100,       
    }

    const gramsPerTeaspoon = {
        'baking powder': 5,
        'baking soda': 6,
        'kosher salt': 3,
        'sea salt': 5,
    }


const ingredientToConvert = document.querySelector('#ingredientConvertSelect').value
const amount = document.querySelector('#amountToConvert').value
const convertFrom = document.querySelector('#convertFrom').value
// const convertTo = document.querySelector('convertTo').value

let converted

// if(ingredientToConvert == 'all-purpose flour' && convertFrom == 'cupsToGrams'){
//     converted = amount * gramsPerCup[`${ingredientToConvert}`]
//     document.querySelector('#showConverted').innerText=`${amount} cup(s) of ${ingredientToConvert} = ${converted} grams`
// }


if(ingredientToConvert == 'all-purpose flour'){
    switch(convertFrom){
        case 'cupsToGrams':
            converted = amount * gramsPerCup[`${ingredientToConvert}`]
            document.querySelector('#showConverted').innerText=`${amount} cup(s) of ${ingredientToConvert} = ${converted} grams`
        break

        case 'gramsToCups':
            converted = (amount / gramsPerCup[`${ingredientToConvert}`]).toFixed(2)
            document.querySelector('#showConverted').innerText=`${amount} grams of ${ingredientToConvert} = ${converted} cups`
        break
    }
}

}