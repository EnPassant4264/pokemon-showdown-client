"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Scripts = {
	// inherit: 'm4av6',
	init() {
		for (const i in this.data.Items) {
			if (!this.data.Items[i].megaStone) continue;
			this.modData('Items', i).onTakeItem = false;
			const id = this.toID(this.data.Items[i].megaStone);
			if (this.modData('FormatsData', id)) this.modData('FormatsData', id).isNonstandard = null;
		}
	},
	canMegaEvo(pokemon) {
		if (pokemon.species.isMega) return null;

		const item = pokemon.getItem();
		if (item.megaStone) {
			if (item.megaStone === pokemon.baseSpecies.name) return null;
			return item.megaStone;
		} else {
			return null;
		}
	},
	runMegaEvo(pokemon) {
		if (pokemon.species.isMega) return false;

		// @ts-ignore
		let species = this.getMixedSpecies(pokemon.species, pokemon.canMegaEvo);
		if (pokemon.getItem().name === 'RKS Megamemory') {
			let silvallyType = pokemon.hpType || 'Dark';
			if (species.types[1] === silvallyType) {
				species.types = [silvallyType];
			} else if (!species.types[1] && species.types[0] !== silvallyType) {
				// single-typed Pokémon can still have a primary type as their secondary type
				species.types = [species.types[0], silvallyType];
			} else {
				species.types = [silvallyType, species.types[1]];
			}
		}
		const side = pokemon.side;

		// Pokémon affected by Sky Drop cannot Mega Evolve. Enforce it here for now.
		for (const foeActive of side.foe.active) {
			if (foeActive.volatiles['skydrop'] && foeActive.volatiles['skydrop'].source === pokemon) {
				return false;
			}
		}

		// Do we have a proper sprite for it?
		if (this.dex.getSpecies(pokemon.canMegaEvo).baseSpecies === pokemon.m.originalSpecies) {
			pokemon.formeChange(species, pokemon.getItem(), true);
			this.add('-start', pokemon, pokemon.getItem(), '[silent]');
			this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
			const abilities = species.abilities;
			const baseStats = species.baseStats;
			const type = species.types[0];
			if (species.types[1]) {
				const type2 = species.types[1];
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="https://${Config.routes.client}/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
			} else {
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
			}
		} else {
			const oSpecies = this.dex.getSpecies(pokemon.m.originalSpecies);
			// @ts-ignore
			const oMegaSpecies = this.dex.getSpecies(species.originalMega);
			pokemon.formeChange(species, pokemon.getItem(), true);
			this.add('-start', pokemon, oMegaSpecies.requiredItem, '[silent]');
			this.add('-start', pokemon, 'typechange', pokemon.species.types.join('/'), '[silent]');
			const abilities = species.abilities;
			const baseStats = species.baseStats;
			const type = species.types[0];
			if (species.types[1]) {
				const type2 = species.types[1];
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"><img src="https://${Config.routes.client}/sprites/types/${type2}.png" alt="${type2}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
			} else {
				this.add(`raw|<ul class="utilichart"><li class="result"><span class="col pokemonnamecol" style="white-space: nowrap">` + species.name + `</span> <span class="col typecol"><img src="https://${Config.routes.client}/sprites/types/${type}.png" alt="${type}" height="14" width="32"></span> <span style="float: left ; min-height: 26px"><span class="col abilitycol">` + abilities[0] + `</span><span class="col abilitycol"></span></span><span style="float: left ; min-height: 26px"><span class="col statcol"><em>HP</em><br>` + baseStats.hp + `</span> <span class="col statcol"><em>Atk</em><br>` + baseStats.atk + `</span> <span class="col statcol"><em>Def</em><br>` + baseStats.def + `</span> <span class="col statcol"><em>SpA</em><br>` + baseStats.spa + `</span> <span class="col statcol"><em>SpD</em><br>` + baseStats.spd + `</span> <span class="col statcol"><em>Spe</em><br>` + baseStats.spe + `</span> </span></li><li style="clear: both"></li></ul>`);
			}
		}
		pokemon.canMegaEvo = null;
		return true;
	},
	getMixedSpecies(originalForme, megaForme) {
		const originalSpecies = this.dex.getSpecies(originalForme);
		const megaSpecies = this.dex.getSpecies(megaForme);
		if (originalSpecies.baseSpecies === megaSpecies.baseSpecies) return megaSpecies;
		// @ts-ignore
		const deltas = this.getMegaDeltas(megaSpecies);
		// @ts-ignore
		const species = this.doGetMixedSpecies(originalSpecies, deltas);
		return species;
	},
	getMegaDeltas(megaSpecies) {
		const baseSpecies = this.dex.getSpecies(megaSpecies.baseSpecies);
		const deltas







 = {
			ability: megaSpecies.abilities['0'],
			baseStats: {},
			weighthg: megaSpecies.weighthg - baseSpecies.weighthg,
			originalMega: megaSpecies.name,
			requiredItem: megaSpecies.requiredItem,
		};
		let statId;
		for (statId in megaSpecies.baseStats) {
			deltas.baseStats[statId] = megaSpecies.baseStats[statId] - baseSpecies.baseStats[statId];
		}
		if (megaSpecies.types.length > baseSpecies.types.length) {
			deltas.type = 'type1';
			deltas.type1 = megaSpecies.types[1];
		} else if (megaSpecies.types.length < baseSpecies.types.length) {
			deltas.type = 'mono';
		} else if (megaSpecies.types[0] !== baseSpecies.types[0]) {
			deltas.type = 'type0';
			deltas.type0 = megaSpecies.types[0];
		} else if (megaSpecies.types[1] !== baseSpecies.types[1]) {
			deltas.type = 'type1';
			deltas.type1 = megaSpecies.types[1];
		}
		deltas.isMega = true;
		return deltas;
	},
	doGetMixedSpecies(speciesOrForme, deltas) {
		if (!deltas) throw new TypeError("Must specify deltas!");
		const species = this.dex.deepClone(this.dex.getSpecies(speciesOrForme));
		species.abilities = {'0': deltas.ability};
		if (deltas.type === 'mono') {
			species.types = [species.types[0]];
		} else if (deltas.type === 'type1') {
			if (species.types[0] === deltas.type1) {
				species.types = [deltas.type1];
			} else {
				species.types = [species.types[0], deltas.type1];
			}
		} else if (deltas.type === 'type0') {
			if (species.types[1] === deltas.type0) {
				species.types = [deltas.type0];
			} else if (!species.types[1] && species.types[0] !== deltas.type0) {
				// single-typed Pokémon can still have a primary type as their secondary type
				species.types = [species.types[0], deltas.type0];
			} else {
				species.types = [deltas.type0, species.types[1]];
			}
		}
		const baseStats = species.baseStats;
		for (const statName in baseStats) {
			baseStats[statName] = this.clampIntRange(baseStats[statName] + deltas.baseStats[statName], 1, 255);
		}
		species.weighthg = Math.max(1, species.weighthg + deltas.weighthg);
		species.originalMega = deltas.originalMega;
		species.requiredItem = deltas.requiredItem;
		if (deltas.isMega) species.isMega = true;
		species.deltas = deltas; // preserving deltas for potential form change compatibility
		return species;
	},
}; exports.Scripts = Scripts;
