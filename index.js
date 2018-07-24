
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  
  return Object.assign({}, object, {[key]: value} )
}

updateObjectWithKeyAndValue(recipe, 'fried_chicken', 'chicken')
console.log(recipe)