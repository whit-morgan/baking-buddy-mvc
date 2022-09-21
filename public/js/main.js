const deleteBtn = document.querySelectorAll('.del')
const moreArrow = document.querySelectorAll('.fa-chevron-circle-down')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteRecipe)
})

// Array.from(moreArrow).forEach((element)=>{
//     element.addEventListener('click', showFullRecipe)
// })


// async function deleteRecipe(){
//     const recipeId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('recipes/deleteRecipe', {
//             method: 'delete',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'recipeIdFromJSFile': recipeId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

// async function showFullRecipe(){
//     const recipeId = this.parentNode.dataset.id
//     try{
//         const response = await fetch('recipes/showFullRecipe', {
//             method: 'get',
//             headers: {'Content-type': 'application/json'},
//             body: JSON.stringify({
//                 'recipeIdFromJSFile': recipeId
//             })
//         })
//         const data = await response.json()
//         console.log(data)
//         location.reload()
//     }catch(err){
//         console.log(err)
//     }
// }

