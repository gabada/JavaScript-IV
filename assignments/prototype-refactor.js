/*
Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.

At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.

Each constructor function has unique properties and methods that are defined in their block comments below:
*/

/*
=== GameObject ===
* createdAt
* dimensions (These represent the character's size in the video game)
* destroy() // prototype method -> returns the string: 'Object was removed from the game.'
*/

class GameObject {
    constructor(goattrs) {
        this.createdAt = Date();
        this.dimensions = goattrs.dimensions;
    }
    destroy() {
        return `${this.name} was removed from the game.`
    }
}

/*
    === CharacterStats ===
    * healthPoints
    * name
    * takeDamage() // prototype method -> returns the string '<object name> took damage.'
    * should inherit destroy() from GameObject's prototype
*/

class CharacterStats {
    constructor(csAttrs) {
        super(csAttrs);
        this.healthPoints = csAttrs.healthPoints;
        this.name = csAttrs.name;
    }
    takeDamage() {
        return `${this.name} took damage.`;
    }
}

/*
    === Humanoid (Having an appearance or character resembling that of a human.) ===
    * team
    * weapons
    * language
    * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
    * should inherit destroy() from GameObject through CharacterStats
    * should inherit takeDamage() from CharacterStats
*/

class Humanoid {
    constructor(hAttrs) {
        super(hAttrs);
        this.team = hAttrs.team;
        this.weapons = hAttrs.weapons;
        this.language = hAttrs.language;
    }

    greet() {
        return `${this.name} offers a greeting in ${this.language}`;
    }
}

// * Give the Hero and Villains different methods that could be used to remove health points from
// objects which could result in destruction if health gets to 0 or drops below 0;
function Villain(vAttrs) {
    Humanoid.call(this, vAttrs);
}

Villain.prototype = Object.create(Humanoid.prototype);

Villain.prototype.bomb = function () {
    return `${this.name} just threw a bomb. ${batman.glide()}`
}

Villain.prototype.laugh = function () {
    return `${this.name} just laughed evilly. ${batman.cringe()}`
}

Villain.prototype.threat = function () {
    return `${this.name} just called in a threat!`
}

Villain.prototype.shoot = function () {
    return `AIEEE! ${this.name} just shot their gun! ${batman.batmobile()}`
}

function Hero(heroAttrs) {
    Humanoid.call(this, heroAttrs);
}

Hero.prototype = Object.create(Humanoid.prototype);

Hero.prototype.glide = function () {
    return `${this.name} glided to safety.`
}

Hero.prototype.batmobile = function () {
    return `${this.name} just summoned the Bat Mobile.`
}

Hero.prototype.punch = function () {
    return `KAPOW ${this.name} just threw a punch! ${joker.destroy()}`
}

Hero.prototype.kick = function () {
    return `BAM ${this.name} just landed a kick! ${joker.destroy()}`
}

Hero.prototype.cringe = function () {
    return `GLIPP ${this.name} cringed.`
}


/*
    * Inheritance chain: GameObject -> CharacterStats -> Humanoid
    * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
    * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


    const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 1,
        height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
        'Staff of Shamalama',
    ],
    language: 'Common Tongue',
    });

    const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
        'Giant Sword',
        'Shield',
    ],
    language: 'Common Tongue',
    });

    const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
        'Bow',
        'Dagger',
    ],
    language: 'Elvish',
    });

    const batman = new Hero({
    createdAt: new Date(),
    dimensions: {
        length: 2,
        width: 2,
        height: 6,
    },
    healthPoints: 50,
    name: 'Batman',
    team: 'Justice League',
    weapons: [
        'Utility Belt',
        'Stealth',
    ],
    language: 'sonar',
    });

    const joker = new Villain({
    createdAt: new Date(),
    dimensions: {
        length: 1,
        width: 2,
        height: 4,
    },
    healthPoints: 40,
    name: 'The Joker',
    team: 'Suicide Squad',
    weapons: [
        'Gun',
        'Knife',
    ],
    language: 'insanity',
    });

    console.log(mage.createdAt);  // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
    console.log(batman.kick());
    console.log(joker.laugh());
    console.log(joker.bomb());
    console.log(joker.shoot());
    console.log(batman.punch());


    // Stretch task:
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
    // * Create two new objects, one a villain and one a hero and fight it out with methods!