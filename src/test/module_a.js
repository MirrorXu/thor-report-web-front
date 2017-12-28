console.log( 'this is module_a' );

var person = {
	name:"Mirror" ,
	age: 26 ,
	sayHi:function () {
		alert( 'hello i m ' + this.name );
	}
}

console.log( ' person == global.person?' , person == global.person );


// exports.person = person;

// exports = person


// module.exports = person;