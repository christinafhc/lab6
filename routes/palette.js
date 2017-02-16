var palettes = require('../palettes.json');

exports.randomPalette = function(req, res) {
	// get a random palette from the top ones
	// var randomPalette = req.params.id;
	var randomPalette = palettes[Math.floor(palettes.length * Math.random())];
	res.json(randomPalette);
}