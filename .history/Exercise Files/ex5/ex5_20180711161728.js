var numbers = {
	// ..
};

// should print 0..100 by 1s
for (let num of numbers) {
	console.log(num);
}

// should print 6..30 by 4s
for (let num of /*..*/) {
	console.log(num);
}


var obj = {
	*[Symbol.iterator]() {
		for (let i = this.start; i <= this.end; i++) {
			yield this.values[i];
		}
	},
	values: [ 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15 ],
	start: 4,
	end: 13
}

var vals = [...obj];
console.log(obj);
console.log(vals);