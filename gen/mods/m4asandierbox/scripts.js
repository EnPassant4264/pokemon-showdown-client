"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Scripts = {
	inherit: 'm4asandbox',
	pokemon: {
		runEffectiveness(move) {
			let totalTypeMod = 0;
			for (const type of this.getTypes()) {
				if (type === 'Normal' && (move ).spiralpowerBoosted) {
					totalTypeMod += 1;
				} else {
					let typeMod = this.battle.dex.getEffectiveness(move, type);
					typeMod = this.battle.singleEvent('Effectiveness', move, null, this, type, move, typeMod);
					totalTypeMod += this.battle.runEvent('Effectiveness', this, type, move, typeMod);
				}
			}
			return totalTypeMod;
		},
	},
}; exports.Scripts = Scripts;
