
var recipes = {}

function updateObjectWithKeyAndValue(object, key, value){
  
  obj = {prop: 1}
  var newObj = Object.assign({}, obj)
  
  return object + newObj
}

console.log(updateObjectWithKeyAndValue('recipe', 'grilled chicken', 'chicken'))