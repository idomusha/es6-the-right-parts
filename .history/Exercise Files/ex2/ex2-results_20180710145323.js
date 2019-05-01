function foo(a, b, c, ...gather) {
	return [a ...gather];
}

function bar() {
	var a1 = [ 2, 4 ];
	var a2 = [ 6, 8, 10, 12 ];

	return foo(...a1, ...a2);
}

console.log(
	bar().join("") === "281012"
);


function required(parameterName) {
	throw `Parameter ${parameterName} required.`;
}

function setId(id = required('id')) {

}

setId();