
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  
  object = {prop: 1}
  object.key = value
  var newObj = Object.assign({}, obj)
  
  return object + newObj
}

console.log(updateObjectWithKeyAndValue('recipe', 'grilled chicken', 'chicken'))