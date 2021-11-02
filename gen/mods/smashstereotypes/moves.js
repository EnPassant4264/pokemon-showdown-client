"use strict";Object.defineProperty(exports, "__esModule", {value: true}); const Moves = {
	allterrainblast: {
		accuracy: 100,
		basePower: 50,
		category: "Special",
		shortDesc: "Power doubles and type varies in each terrain.",
		id: "allterrainblast",
		name: "All-Terrain Blast",
		pp: 10,
		priority: 0,
		flags: {
			bullet: 1,
			protect: 1,
			mirror: 1
		},
		onModifyType(move, pokemon) {
			if (!pokemon.isGrounded()) return;
			switch (this.field.terrain) {
			case 'electricterrain':
				move.type = 'Electric';
				break;
			case 'grassyterrain':
				move.type = 'Grass';
				break;
			case 'mistyterrain':
				move.type = 'Fairy';
				break;
			case 'psychicterrain':
				move.type = 'Psychic';
				break;
			}
		},
		onModifyMove(move, pokemon) {
			if (this.field.terrain && pokemon.isGrounded()) {
				move.basePower *= 2;
			}
		},
		onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Weather Ball", target);
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		zMovePower: 160,
		contestType: "Beautiful",
	},
	leafage: {
		inherit: true,
		onModifyPriority(priority, source, target, move) {
			if (source.species.id === 'shaymin') {
				return priority + 1;
			}
		},
	},
	shedleaves: {
 		  accuracy: true,
		  basePower: 0,
		  category: "Status",
		  shortDesc: "Removes the user's Grass-type, resets negative stat changes, and cures the user of status.",		
		  name: "Shed Leaves",
		  pp: 10,
		  priority: 0,
		  flags: {snatch: 1},
		  onTryMove(pokemon, target, move) {
			  if (pokemon.hasType('Grass')) return;
			  this.add('-fail', pokemon, 'move: Shed Leaves');
			  this.attrLastMove('[still]');
			  return null;
		  },		
		  onHit(pokemon) {
				if (['', 'slp', 'frz'].includes(pokemon.status)) return;
				pokemon.cureStatus();
		  },
		  self: {
			  onHit(pokemon) {
				const boosts = {};
				let i;
				for (i in pokemon.boosts) {
					if (pokemon.boosts[i] < 0) {
						boosts[i] = 0;
					}
				}
				pokemon.setBoost(boosts);
				this.add('-clearnegativeboost', pokemon, '[silent]');
				this.add('-message', pokemon.name + "'s negative stat changes were removed!");
				
				  pokemon.setType(pokemon.getTypes(true).map(type => type === "Grass" ? "???" : type));
				  this.add('-start', pokemon, 'typechange', pokemon.types.join('/'), '[from] move: Shed Leaves');
			  },
		  },
		  secondary: null,
		  target: "self",
		  type: "Grass",
		  zMove: {effect: 'heal'},
		  contestType: "Clever",
	},
	seedbomb: {
		inherit: true,
		secondary: {
			chance: 50,
			onHit(target, source, move) {
				if (source.species.id !== 'shaymin') return;
				target.addVolatile('leechseed');
			},
		},
	},
	focusblast: {
		inherit: true,
		onSourceModifyAccuracy(accuracy) {
			if (source.species.id !== 'heatmor') return;
			return accuracy + 15;
		},
	},
	adaptableattack: {
		accuracy: 100,
		basePower: 90,
		category: "Physical",
		shortDesc: "Deals typeless damage. Special if SpA > Atk.",
		isViable: true,
		name: "Adaptable Attack",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1, contact: 1},
		onPrepareHit: function(target, source, move) {
		  this.attrLastMove('[still]');
		  this.add('-anim', source, "Multi-Attack", target);
		},
		onModifyMove(move, pokemon, target) {
			move.type = '???';
			if (pokemon.getStat('spa', false, true) > pokemon.getStat('atk', false, true)) move.category = 'Special';
		},
		onBasePower(basePower, pokemon, target) {
			if (pokemon.species.name === 'Type: Null') {
				return this.chainModify(1.5);
			}
		},
		secondary: null,
		target: "normal",
		type: "Normal",
		contestType: "Cute",
	},
	chipaway: {
		inherit: true,
		onModifyMove(move, source, target) {
			if (source.species.id === 'mytheon') {
				move.type = 'Dragon';
				move.basePower = 85;
			}
		},
		onUseMoveMessage(pokemon, target, move) {
			if (pokemon.species.id === 'mytheon') {
				this.add('-message', `${pokemon.name}'s ${move.name} is ${move.type}-type!`);
			}
		},
	},
	doublekick: {
		inherit: true,
		onSourceModifyAccuracy(accuracy) {
			if (source.species.id !== 'mytheon') return;
			return accuracy - 10;
		},
		onModifyMove(move, source, target) {
			if (source.species.id === 'mytheon') {
				move.basePower = 50;
			}
		},
	},
	naturalgift: {
		inherit: true,
		onPrepareHit(target, pokemon, move) {
			if (pokemon.species.id !== 'mytheon') {
				if (pokemon.ignoringItem()) return false;
				const item = pokemon.getItem();
				if (!item.naturalGift) return false;
				move.basePower = item.naturalGift.basePower;
				pokemon.setItem('');
				pokemon.lastItem = item.id;
				pokemon.usedItemThisTurn = true;
				this.runEvent('AfterUseItem', pokemon, null, null, item);
			}
			else if (pokemon.species.id === 'mytheon') {
				if (pokemon.ignoringItem()) return false;
				const item = pokemon.getItem();
				if (!item.naturalGift) return false;
				move.basePower = item.naturalGift.basePower;
			}
		},
	},
	poisonfang: {
		inherit: true,
		onModifyMove(move, source, target) {
			if (source.species.id === 'mytheon') {
				move.basePower = 65;
			}
		},
		onSourceModifyAccuracy(accuracy) {
			if (source.species.id !== 'mytheon') return;
			return accuracy - 5;
		},
		secondary: {
			chance: 50,
			status: 'tox',
		}, 
		self: {
			chance: 10,
			onHit(source, pokemon) {
				if (source.species.id !== 'mytheon') return;
				pokemon.addVolatile('flinch');
			}
		},				
		target: "normal",
		type: "Poison",
		contestType: "Clever",
	},
	skittersmack: {
		inherit: true,
		onModifyMove(move, source, target) {
			if (source.species.id === 'mytheon') {
				move.basePower = 90;
			}
		},
		onSourceModifyAccuracy(accuracy) {
			if (source.species.id !== 'mytheon') return;
			return accuracy = 100;
		},
		secondaries: [
			{
				chance: 30,
				onHit(source, pokemon) {
					if (pokemon.species.id === 'mytheon') {
						this.boost({spa: -1}, source);
					}
				}
			}, {
				chance: 100,
				onHit(source, pokemon) {
					if (pokemon.species.id !== 'mytheon') {
						this.boost({spa: -1}, source);
					}
				}
			},
		],
	},
	synchronoise: {
		inherit: true,
		onTryImmunity(target, source) {
			if (source.species.id !== 'mytheon') {
				return target.hasType(source.getTypes());
			}
		},
		onModifyMove(move, source, target) {
			if (source.species.id === 'mytheon') {
				move.basePower = 70;
				move.ignoreImmunity = false;
				move.flags.sound = 1;
			}
		},
		onBasePower(basePower, pokemon, target) {
			if (target.hasType(pokemon.getTypes()) && pokemon.species.id === 'mytheon') {
				return this.chainModify(2);
			}
		},
	},
	uturn: {
		inherit: true,
		onModifyMove(move, source, target) {
			if (source.species.id === 'mytheon') {
				move.basePower = 60;
			}
		},
	},
	doubleironbash: {
		num: 742,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		shortDesc: "Hits twice.",
		name: "Double Iron Bash",
		pp: 5,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1, punch: 1},
		multihit: 2,
		target: "normal",
		type: "Steel",
		zMove: {basePower: 180},
		maxMove: {basePower: 140},
		contestType: "Clever",
	},
	eyeofchaos: {
		accuracy: 100,
		basePower: 80,
		category: "Special",
		shortDesc: "Uses user's SpD stat as SpA in damage calculation.",
		isViable: true,
		name: "Eye of Chaos",
		pp: 10,
		priority: 0,
		flags: {protect: 1, mirror: 1},
		onPrepareHit: function(target, source, move) {
			this.attrLastMove('[still]');
			this.add('-anim', source, "Glare", target);
		},
		useSourceDefensiveAsOffensive: true,
		secondary: null,
		target: "normal",
		type: "Dark",
	},
	multiattack: {
		num: 718,
		accuracy: 100,
		basePower: 120,
		category: "Physical",
		name: "Multi-Attack",
		shortDesc: "Type varies based on the user's type.",
		pp: 10,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onModifyType(move, pokemon) {
			let type = pokemon.types[0];
			if (type === "Bird") type = "???";
			move.type = type;
		},
		secondary: null,
		target: "normal",
		type: "Normal",
	},
	slitherstrike: {
		num: -1,
		accuracy: 100,
		basePower: 60,
		category: "Physical",
		shortDesc: "User switches out after damaging the target. If used by Sandaconda, it transforms into Sandaconda-Uncoiled for the rest of the match.",
		name: "Slither Strike",
		pp: 20,
		priority: 0,
		flags: {contact: 1, protect: 1, mirror: 1},
		onHit(target, pokemon, move) {
			if (pokemon.baseSpecies.baseSpecies === 'Sandaconda' && !pokemon.transformed && pokemon.species.id !== 'sandacondauncoiled') {
				move.willChangeForme = true;
			}
		},
		onAfterMoveSecondarySelf(pokemon, target, move) {
			if (move.willChangeForme) {
				let forme = '';
				if (pokemon.species.id === 'sandaconda') {
					forme = '-Uncoiled';
				}
				pokemon.formeChange('Sandaconda' + forme, move, true, '[silent]');
				this.add('-message', `${pokemon.name} uncoiled!`);
				const species = this.dex.getSpecies(pokemon.species.name);
				const abilities = species.abilities;
				const baseStats = species.baseStats;
				const type = species.types[0];
			}
		},
		selfSwitch: true,
		secondary: null,
		target: "normal",
		type: "Ground",
		contestType: "Cute",
	},
}; exports.Moves = Moves;
