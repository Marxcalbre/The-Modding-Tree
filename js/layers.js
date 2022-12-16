addLayer("a", {
    name: "Monsters", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "M", // This appears on the layer's node. Default is the id with the first letter capitalized
     // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		
	
    }},

    color: "#4BDC13",
    requires: new Decimal(3), // Can be a function that takes requirement increases into account
	
    resource: "Monsters", // Name of prestige currency
	
    baseResource: "Skill", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
	
    exponent: 1.05, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if (hasUpgrade("b", 11)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "a", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	
    upgrades: {
     11: {


  title: "Tutorials.",
    description: "Double your skill gain.",
    cost: new Decimal(2),


        },





    },
	
    layerShown(){return true}
	
})

addLayer("b", {
    name: "EXP", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "E", // This appears on the layer's node. Default is the id with the first letter capitalized
branches: ["a"],     // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		
		
    }},

    color: "#4BDC13",
	
    requires: new Decimal(3), // Can be a function that takes requirement increases into account
    resource: "EXP", // Name of prestige currency
	
    baseResource: "Monsters", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.05, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
		if (hasUpgrade("c", 12)) mult = mult.times(2)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "b", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	


 upgrades: {
     11: {


  title: "Get stronger.",
    description: "Double your skill and monster gain.",
    cost: new Decimal(10),


        },





    },
	



 
    layerShown(){return true}
	
})

addLayer("c", {
    name: "Items", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "I", // This appears on the layer's node. Default is the id with the first letter capitalized
branches: ["a"],     // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
	
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
		
		
    }},

    color: "#4BDC13",
	
    requires: new Decimal(3), // Can be a function that takes requirement increases into account
    resource: "Items", // Name of prestige currency
	
    baseResource: "Monsters", // Name of resource prestige is based on
    baseAmount() {return player.a.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 1.05, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "c", description: "P: Reset for prestige points", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
	


 upgrades: {
     11: {


  title: "Skill increase.",
    description: "Increase Skill based on EXP.",
    cost: new Decimal(10),
    effect() {
        return 0
    },
    effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect

        },

    12: {


  title: "EXP boost.",
    description: "Double EXP gain.",
    cost: new Decimal(10),

        },
	



    },
	



 
    layerShown(){return true}
	
})

