function upper(strings,...values) {}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	`Hello ____ (@____), welcome to the ____!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);

function currency(strings,...values) {
	var str = '';
	for (let i = 0; i < strings.length; i++) {
		if ( i > 0 ) {
			str += typeof values[i-1] === 'number' ? values[i-1].toFixed(2) : values[i-1];
		}
		str += strings[i];
	}
	return str;
}

var name = 'Nicolas';
var orderNumber = '123';
var total = 319.7;
var msg = currency`Hello ${name}, \
your order #${orderNumber} is $${total}. `;