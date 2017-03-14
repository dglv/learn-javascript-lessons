function ask(question, yes, no){
  if (confirm(question)){
  	yes()
  }else{ 
  	no();
  }
}