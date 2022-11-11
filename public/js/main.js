
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

    let converted

    if(convertFrom === 'cupsToGrams'){
        converted = amount * gramsPerCup[`${ingredientToConvert}`]
        document.querySelector('#showConverted').innerText=`${amount} cup(s) of ${ingredientToConvert} = ${converted} grams`
    }else if(convertFrom === 'gramsToCups'){
        converted = (amount / gramsPerCup[`${ingredientToConvert}`]).toFixed(2)
        document.querySelector('#showConverted').innerText=`${amount} grams of ${ingredientToConvert} = ${converted} cups`
    }

}