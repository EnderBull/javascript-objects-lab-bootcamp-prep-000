function Objects(){
  var recipes = {}
}

function updateObjectWithKeyAndValue(object, key, value){
  
  object = {key: value}
  var newObj = Object.assign({}, object)
  
  return object + newObj
}

console.log(updateObjectWithKeyAndValue('recipe', 'grilled chicken', 'chicken'))