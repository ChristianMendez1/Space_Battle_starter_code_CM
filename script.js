
//ship
class ship {
    constructor () {
        this.hull = 0;
        this.firepower = 0;
        this.accuracy = 0;
    }
    attack(){
    }
}

//human ship
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

//alienship
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

//creates 6 alienships
const ussAssembly = new humanShip('USS Assembly')
let alienArmy = []
for (let i = 0; i < 6; i++){
    alienArmy.push(new alienShip)
}

//game button 
gamebutton.addEventListener('click', spaceGame)

//game
function spaceGame(){
for (let i = 1; alienArmy.length != 0; i++){
    //human attack alien
    if (Math.random() < ussAssembly.accuracy) {
        ussAssembly.attack(alienArmy[0]);
        //log begin
        console.log('You hit the Alien Ship!');
        let youhit = document.createElement('li');
        youhit.innerHTML = 'You hit the Alien Ship!';
        document.getElementById('log').append(youhit);
        //log2
        console.log('The Alien Ship has ' + alienArmy[0].hull + ' health left');
        let youhealth = document.createElement('li');
        youhealth.innerHTML = 'The Alien Ship has ' + alienArmy[0].hull + ' health left';
        document.getElementById('log').append(youhealth);
        //log end
        if(alienArmy[0].hull <= 0){
            //1 alienship dies
            alienArmy.shift();
            //log begin
            //log1
            console.log('The Alien Ship went kabloo-ey!');
            let kablooey = document.createElement('li');
            kablooey.innerHTML = 'The Alien Ship went kabloo-ey!';
            document.getElementById('log').append(kablooey);
            //log2
            console.log('There are ' + alienArmy.length + " Alien Ships left");
            let alienleft = document.createElement('li');
            alienleft.innerHTML = 'There are ' + alienArmy.length + " Alien Ships left";
            document.getElementById('log').append(alienleft);
            //log end
            if(alienArmy.length === 0){
                //you win 
                console.log('You Win!');
                //log1
                console.log('Congratulations, You saved the Unisverse! You Win!');
                let youwin = document.createElement('li');
                youwin.innerHTML = 'Congratulations, You saved the Universe! You Win!';
                document.getElementById('log').append(youwin);
                break;
            }
        }

    }

    if (Math.random() < alienArmy[0].accuracy) {
        //alien attacks you
        alienArmy[0].attack(ussAssembly);
        console.log('The Alien Ship hit you');
        //log begin
        console.log('The Alien Ship hit you');
        let alienhit = document.createElement('li');
        alienhit.innerHTML = 'The Alien Ship hit you';
        document.getElementById('log').append(alienhit);
        //log2
        console.log('You have' + ussAssembly.hull + ' health left');
        let alienhealth = document.createElement('li');
        alienhealth.innerHTML = 'You have ' + ussAssembly.hull + ' health left';
        document.getElementById('log').append(alienhealth);
        //log end
        //log end
        if(ussAssembly.hull <= 0){
            //you die and lose
            //log1
            console.log('Sorry, you died. You lose. Game Over.');
            let youlose = document.createElement('li');
            youlose.innerHTML = 'Sorry, you died. You lose. Game Over.';
            document.getElementById('log').append(youlose);
            break;
        }
    }
}
}

//button to attack
//health changes
//button attack
//loop function starts
//loop till enemy dies, till a certain length
//ask if you want to retreat or fight, and show health