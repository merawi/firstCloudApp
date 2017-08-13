function update(obj1,obj2){
Object.keys(obj1).forEach(function(key1){
  Object.keys(obj2).forEach(function(key2){
    if(key1!="_id" && key1==key2 && obj1[key1]!=obj2[key2] && obj2[key2]) obj1[key1]=obj2[key2] ;
  });
});
}

module.exports =update;