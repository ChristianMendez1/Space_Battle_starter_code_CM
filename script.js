// Make A Ship Class
//make main class

// Make the Human Ship sub-class.

// Make an Alien Ship sub-class.
//random numbers
// hull - between 3and 6
// firepower - between 2and 4
// accuracy - between .6and .8

// Make an instance of each class

// Simulate a battle between your ship and a single alien ship first.

// Make a method for the USS Assembly that will attack a given target. The target can be an input to the method.

// Run the method and pass it the alien ship.

// Make it so the method reduces the target's hull by the firepower of the USS Assembly.


class ship {
    constructor () {
        this.hull = 0;
        this.firepower = 0;
        this.accuracy = 0;
    }
    attack(){
    }
}

class humanShip extends ship {
    constructor(name){
        super();
        this.name = name;
        this.hull = 20
        this.firepower = 5
        this.accuracy = .7
        }
        attack(alienShip){
            alienShip.hull -= this.firepower;
        }
}

class alienShip extends ship {
    constructor(){
        super();
        this.name = "Alien Ship"
        this.hull = Math.floor(Math.random() * 4) + 3;
        this.firepower = Math.floor(Math.random() * 3) + 2;
        this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack(humanShip){
        humanShip.hull -= this.firepower;
    }
    
}

const ussAssembly = new humanShip('USS Assembly')
let alienArmy = []
for (let i = 0; i < 6; i++){
    alienArmy.push(new alienShip)
}

for (let i = 1; alienArmy.length != 0; i++){
    if (Math.random() < ussAssembly.accuracy) {
        ussAssembly.attack(alienArmy[0]);
        console.log('You hit the Alien Ship!');

        if(alienArmy[0].hull <= 0){
            console.log('The Alien Ship went kabloo-ey!');
            alienArmy.shift();

            if(alienArmy.length === 0){
                console.log('You Win!');
                break;
            }
        }

    }

    if (Math.random() < alienArmy[0].accuracy) {
        alienArmy[0].attack(ussAssembly);
        console.log('You have been hit!');
        if(ussAssembly.hull <= 0){
            console.log("Game Over Man!... Game... Over!")
            break;
        }
    }

    console.log(ussAssembly.name + ' ' + ussAssembly.hull);
    console.log(alienArmy[0].name + ' ' + alienArmy[0].hull + ' and ' + alienArmy.length + ' ships left');

}
// const iksAmar = new alienShip()

// console.log(iksAmar)
// ussAssembly.attack(iksAmar)
// console.log(iksAmar)

// console.log(ussAssembly)
// iksAmar.attack(ussAssembly)
// console.log(ussAssembly)


// Make a game object

// Make a method in the game object that will run a 'check win' for the health of the alien(s) and/or the USS Assembly. If the hull is 0 or less, display a message that the ship went kabloo-ey.

// console.log(ussAssembly.hull)

// console.log(iksAmar)
// ussAssembly.attack(iksAmar)
// console.log(iksAmar)

// if(iksAmar.hull <= 0){
//     console.log('The ship went kabloo-ey')
// }

// if (Math.random() < iksAmar.accuracy) {
//     console.log(iksAmar)
// 	console.log('You have been hit!');
// }


// console.log(alienArmy[0])

// if(alienArmy.length != 0){

//     if (Math.random() < ussAssemby.accuracy) {
//         ussAssembly.attack(alienArmy[0]);
//         console.log('You hit the Alien Ship!');

//         if(alienArmy[0].hull <= 0){
//             console.log('The Alien Ship went kabloo-ey!');
//             alienArmy.shift();
//         }
//     }

//     if (Math.random() < alienArmy[0].accuracy) {
//         alienArmy[0].attack(ussAssembly);
//         console.log('You have been hit!');
//         if(ussAssembly.hull <= 0){
//             break;
//         }
//     }



// }

// Make it so the alien will only be hit if a Math.random call is below the accuracy threshold.

// Make a method for the alien ship to attack a target.

// At a status console log for the end of the round.

// PROBLEM: If you make the alien ship go kabloo-ey, then the alien should not then be able to attack you. Fix this.

// Make it so the attacks will keep occuring until someone's hull is at 0. Isolate what it is that you want to repeat.