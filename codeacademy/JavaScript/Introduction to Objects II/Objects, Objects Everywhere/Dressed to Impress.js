var suitcase = {
    shirt: "Hawaiian"
};

if(suitcase.hasOwnProperty( 'shorts' )) {
	console.log(suitcase['shorts']);
} else {
	suitcase.shorts = "Diesel";
	console.log(suitcase.shorts)
}