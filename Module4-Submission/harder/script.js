(function(window){//


var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i=0; i<names.length; i++) {

  var firstInit = names[i].charAt(0).toLowerCase();
  
  if (firstInit==="j") {
    byeSpeaker.speak(names[i]);
  } else {
    helloSpeaker.speak(names[i]);
  }
}
})(window);
