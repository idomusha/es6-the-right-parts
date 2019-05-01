function ajax(url,cb) {
	// fake ajax response:
	cb({
		foo: 2,
		baz: [ 6, 8, 10 ],
		bam: {
			qux: 12
		}
	});
}

function check(data) {
	console.log(
		56 === (
			data.foo +
			data.bar +
			data.baz[0] + data.baz[1] + data.baz[2] +
			data.bam.qux +
			data.bam.qam
		)
	);
}

var defaults = {
	foo: 0,
	bar: 4,
	bam: {
		qux: 0,
		qam: 14
	}
};

function response() {

	check({

	});

}

ajax("http://fun.tld",response);


function foo() {
	return [ 1, 2, 3, [4,5,6], 7 ];
}

function bar(...parameters) {
	console.log(parameters);
}

var a,b,c,args;

[a,b,c,...args] = foo() || [];
console.log(args);
bar(1,2,3);