function upper(strings,...values) {
	console.log(strings);
	let str = strings[0];
	for (let i = 0; i < values.length; i++) {
		console.log(values[i]);
		console.log(typeof values[i]);
		console.log(values[i].toUppercase());
		str += values[i].toUppercase() + strings[i+1];
	}
	console.log(str);
	return str;
}

var name = "kyle",
	twitter = "getify",
	classname = "es6 workshop";

console.log(
	upper`Hello ${name} (@${twitter}), welcome to the ${classname}!` ===
	"Hello KYLE (@GETIFY), welcome to the ES6 WORKSHOP!"
);



function currency(strings,...values) {
	let str = '';
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
console.log(msg);