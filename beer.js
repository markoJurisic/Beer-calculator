function beerMe(budget, price, recycle) {
	let counter = 0;

	if (budget >= price && recycle >= price) {
		console.log('Congrats, you can buy infinite amount of beers! We should hang out ;)');
		return;
	}

	while (budget >= price) {
		let boughtBeers = Math.floor(budget / price);
		budget = budget - boughtBeers * price + boughtBeers * recycle;
		console.log(`You bought ${boughtBeers} beer(s) for $${boughtBeers*price}, and you got $${boughtBeers*recycle} back. Now you have $${budget} left.`);
		counter += boughtBeers;
		console.log(`Total beers bought: ${counter}`);
	}

	console.log(`You have $${budget} left, so you can't buy another beer :( A sad day for humankind. However, you bought a total of ${counter} beer(s). Cheers!`);
}


// enter your budget, price per bottle and what you earn back from recycling
beerMe(10, 4, 2)