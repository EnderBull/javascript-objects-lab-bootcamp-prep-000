
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  
  object = {prop: 1}
  var newObj = Object.assign({}, object)
  
  return object + newObj
}

console.log(updateObjectWithKeyAndValue('recipe', 'grilled chicken', 'chicken'))