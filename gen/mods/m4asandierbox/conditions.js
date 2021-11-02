"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Conditions = {
	overflow: {
		name: 'Overflow',
		duration: 3,
		onResidualOrder: 1,
		onStart(pokemon) {
			pokemon.setType(pokemon.getTypes(true).map(type => type === "Fire" ? "???" : type));
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] ability: Overflow');
		},
		onEnd(pokemon) {
			pokemon.setType(pokemon.getTypes(true).map(type => type === "???" ? "Fire" : type));
			this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] ability: Overflow');
		},
	},
}; exports.Conditions = Conditions;
