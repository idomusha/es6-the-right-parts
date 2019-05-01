const x = 2;
var fns = [];

((fns) => {
	const x = 5;

	for (let i=0; i<x; i++) {
		fns.push(num = () => i);
	}
})(fns);

console.log(
	(x * 2) === fns[x*2]()
);
// true
