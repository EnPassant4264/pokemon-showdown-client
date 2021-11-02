"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Scripts = {
	init: function () {
		/*Template:
		this.modData('Learnsets', 'pokemon').learnset.move = ['8L1'];
		delete this.modData('Learnsets', 'pokemon').learnset.move;*/
		//Changes
		this.modData('Learnsets', 'landorus').learnset.airslash = ['8L1'];
		
		this.modData('Learnsets', 'shaymin').learnset.knockoff = ['8L1'];
		this.modData('Learnsets', 'shaymin').learnset.taunt = ['8L1'];
		
		delete this.modData('Learnsets', 'genesect').learnset.blizzard;
		delete this.modData('Learnsets', 'genesect').learnset.thunder;
		delete this.modData('Learnsets', 'genesect').learnset.thunderbolt;
		
		delete this.modData('Learnsets', 'dreepy').learnset.fireblast;
		delete this.modData('Learnsets', 'dreepy').learnset.hydropump;
		delete this.modData('Learnsets', 'dreepy').learnset.thunder;
		delete this.modData('Learnsets', 'dreepy').learnset.phantomforce;
		delete this.modData('Learnsets', 'drakloak').learnset.fireblast;
		delete this.modData('Learnsets', 'drakloak').learnset.hydropump;
		delete this.modData('Learnsets', 'drakloak').learnset.thunder;
		delete this.modData('Learnsets', 'drakloak').learnset.phantomforce;
		delete this.modData('Learnsets', 'dragapult').learnset.fireblast;
		delete this.modData('Learnsets', 'dragapult').learnset.hydropump;
		delete this.modData('Learnsets', 'dragapult').learnset.thunder;
		delete this.modData('Learnsets', 'dragapult').learnset.phantomforce;
		
		this.modData('Learnsets', 'dragapult').learnset.shadowclaw = ['8L1'];
		this.modData('Learnsets', 'dragapult').learnset.nightslash = ['8L1'];
		
		delete this.modData('Learnsets', 'spectrier').learnset.nastyplot;
		
		delete this.modData('Learnsets', 'groudon').learnset.eruption;
		
		delete this.modData('Learnsets', 'kyogre').learnset.waterspout;
		this.modData('Learnsets', 'kyogre').learnset.flipturn = ['8L1'];
		
		delete this.modData('Learnsets', 'rayquaza').learnset.vcreate;
		delete this.modData('Learnsets', 'rayquaza').learnset.extremespeed;
		
		this.modData('Learnsets', 'deoxys').learnset.topsyturvy = ['8L1'];
		
		delete this.modData('Learnsets', 'deoxys').learnset.spikes;
		delete this.modData('Learnsets', 'deoxys').learnset.nastyplot;
		delete this.modData('Learnsets', 'deoxys').learnset.superpower;
		delete this.modData('Learnsets', 'deoxys').learnset.extremespeed;
		delete this.modData('Learnsets', 'deoxys').learnset.magiccoat;
		delete this.modData('Learnsets', 'deoxys').learnset.taunt;
		delete this.modData('Learnsets', 'deoxys').learnset.focusblast;
		delete this.modData('Learnsets', 'deoxys').learnset.drainpunch;
		delete this.modData('Learnsets', 'deoxys').learnset.brickbreak;
		delete this.modData('Learnsets', 'deoxys').learnset.agility;
		
		this.modData('Learnsets', 'darmanitangalar').learnset.switcheroo = ['8L1'];
		
		delete this.modData('Learnsets', 'kangaskhan').learnset.seismictoss;
		
		delete this.modData('Learnsets', 'alakazam').learnset.nastyplot;
		
		this.modData('Learnsets', 'metagross').learnset.heavyslam = ['8L1'];
		this.modData('Learnsets', 'metagross').learnset.heatcrash = ['8L1'];
		
		delete this.modData('Learnsets', 'squirtle').learnset.shellsmash;
		delete this.modData('Learnsets', 'wartortle').learnset.shellsmash;
		delete this.modData('Learnsets', 'blastoise').learnset.shellsmash;
		this.modData('Learnsets', 'blastoise').learnset.calmmind = ['8L1'];
		this.modData('Learnsets', 'blastoise').learnset.vacuumwave = ['8L1'];
		
		delete this.modData('Learnsets', 'lugia').learnset.calmmind;
		this.modData('Learnsets', 'lugia').learnset.workup = ['8L1'];
		
		delete this.modData('Learnsets', 'pheromosa').learnset.tripleaxel;
		delete this.modData('Learnsets', 'pheromosa').learnset.quiverdance;
		delete this.modData('Learnsets', 'pheromosa').learnset.blizzard;
		
		delete this.modData('Learnsets', 'magearna').learnset.agility;
		delete this.modData('Learnsets', 'magearna').learnset.shiftgear;
		delete this.modData('Learnsets', 'magearna').learnset.calmmind;
		delete this.modData('Learnsets', 'magearna').learnset.focusblast;
		delete this.modData('Learnsets', 'magearna').learnset.aurasphere;
		delete this.modData('Learnsets', 'magearna').learnset.icebeam;
		delete this.modData('Learnsets', 'magearna').learnset.aurorabeam;
		
		this.modData('Learnsets', 'reshiram').learnset.uturn = ['8L1'];
		
		this.modData('Learnsets', 'zekrom').learnset.knockoff = ['8L1'];
	},
	
	pokemon: {
    ignoringItem() {
        return !!((this.battle.gen >= 5 && !this.isActive) ||
            (this.hasAbility(['klutz', 'gorillatactics']) && !this.getItem().ignoreKlutz) ||
            this.volatiles['embargo'] || this.battle.field.pseudoWeather['magicroom']);
		}
	},
/*
		for (const id in this.dataCache.Pokedex) {
			const poke = this.dataCache.Pokedex[id];
			if (poke.restrictedLearnset) {
				console.log(this.toID(poke.name));
				const thisPoke = this.toID(poke.name);
				const learnset = this.dataCache.Learnsets[this.toID(poke.name)].learnset;
				for (const move in learnset) {
					console.log(thisPoke + " has " + move);
					const moveid = this.dataCache.Moves[move];
					if (moveid.isNonstandard) {
						console.log(moveid.isNonstandard);
						delete this.modData('Learnsets', thisPoke).learnset.moveid;
					}
				}
			}
		}
*/
}; exports.Scripts = Scripts;
