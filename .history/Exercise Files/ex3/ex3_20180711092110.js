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
		42 === (
			data.foo +
			data.bar +
			data.baz[0] + data.baz[1] + data.baz[2] +
			data.bam.qux +
			data.bam.qam
		)
	);
	console.log(
		(
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
	bar: 3,
	bam: {
		qux: 0,
		qam: 1
	}
};

function response(options) {

	let {
		foo = defaults.foo,
		bar = defaults.bar,
		baz,
		bam: {
			qux = defaults.qux,
			qam = defaults.qam,
		}
	} = options;

	check({
		foo,
		bar,
		baz,
		bam: {
			qux,
			qam,
		}
	});

}

ajax("http://fun.tld",response);



function foo() {
	return [ 1, 2, 3, [4,4.5,5], 6, 7, 8, 9 ];
}

function bar(...parameters) {
	console.log(parameters);
}


var [
	a,
	b,
	c,			// 1/3
	[			// 2/3
		d,
		,
		e,
	],
	...rest		// 3/3
] = foo() || [];
console.log(a,b,c,d,e,rest);
bar(1,2,3);