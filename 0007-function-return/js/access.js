function isAccessGranted(username, password){
	if(username==='admin' && password==='qwerty'){
		return true;
	}
	return false;
}

function doNothing() {
  return;
}