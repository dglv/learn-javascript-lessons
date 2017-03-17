function showAlert(name, age){
	var person = {};

	person.name = name;
	person.age = age;

	showPersonAlert(person);
}

function showValeryAlert(){
	var person = {
		name: 'Valery',
		age: 25
	};

	showPersonAlert(person);
}

function showPersonAlert(person){
	var greeting = '';

	if ('name' in person){
		greeting = 'Hi ' + person.name + '! ';
	}

	// another aproach
	if (person.age !== undefined){
		greeting = greeting + 'You`re ' + person.age + ' years old';
	}

	alert(greeting);
}