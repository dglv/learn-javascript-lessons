function showAllProperties(person){
	for(var key in person)
	{
		alert('key: ' + key + ', value: ' + person[key]);
	}
}