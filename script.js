
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

//adds stats start of game
addstats()

//Play Button
gamebutton.addEventListener("click", spaceGame)
   
//gaming functions
function fhumanAttack() {
    //human attack alien    
    if (Math.random() <= ussAssembly.accuracy) {
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
    } else { 
        //else miss
        console.log('You missed the Alien Ship');
        let humanmissed = document.createElement('li');
        humanmissed.innerHTML = 'You missed the Alien Ship';
        document.getElementById('log').append(humanmissed);
    }
}

    function faliendies() {
        //alien dies = continue/retreat or gameover
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
            if(alienArmy.length != 0){
                //if alien dies confirm
                if (confirm("The Alien Ship went kabloo-ey! There are " + alienArmy.length + " Alien Ships left. You have " + ussAssembly.hull + " health left. Do you dare to continue? Press Ok to Continue, Press Cancel to Retreat")) {
                    //log1 new alien
                    console.log('You lock on to your next target');
                    let continuewin = document.createElement('li');
                    continuewin.innerHTML = 'You lock on to your next target';
                    document.getElementById('log').append(continuewin);
                    //log2 new alien health
                    console.log('The new Alien Ship has ' + alienArmy[0].hull + ' health');
                    let newhealth = document.createElement('li');
                    newhealth.innerHTML = ('The new Alien Ship has ' + alienArmy[0].hull + ' health');
                    document.getElementById('log').append(newhealth);
                } else {
                    console.log('You retreated. You live to fight another day. Game Over');
                    let retreatlose = document.createElement('li');
                    retreatlose.innerHTML = 'You retreated. You live to fight another day. Game Over';
                    document.getElementById('log').append(retreatlose);
                    document.getElementById('log').innerHTML = 'You retreated. You live to fight another day. Game Over'
                    document.getElementById('gameoverdiv').innerHTML = ''
                } 
            }    
        }
    }
            
        function fnomorealiens(){
            //no more aliens you win
             if(alienArmy.length === 0){
                //log1
                console.log('Congratulations, You saved the Unisverse! You Win!');
                let youwin = document.createElement('li');
                youwin.innerHTML = 'Congratulations, You saved the Universe! You Win!';
                document.getElementById('log').append(youwin);
                document.getElementById('log').innerHTML = 'Congratulations, You saved the Universe! You Win!'
                document.getElementById('gameoverdiv').innerHTML = ''
            }
        }

    function falienattackshuman(){
    if(document.getElementById('log').innerHTML != 'You retreated. You live to fight another day. Game Over'){
    //alien attacks human
        if (Math.random() <= alienArmy[0].accuracy) {
            //alien attacks you
            alienArmy[0].attack(ussAssembly);
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
        } else { 
            //else misses
            console.log('The Alien Ship missed your ship');
            let alienmissed = document.createElement('li');
            alienmissed.innerHTML = 'The Alien Ship missed your ship';
            document.getElementById('log').append(alienmissed);
        }
    }  
}
    
        function fhumandies(){
        //human dies
        if(ussAssembly.hull <= 0){
            //you die and lose
            //log1
            console.log('Sorry, you died. You lose. Game Over.');
            let youlose = document.createElement('li');
            youlose.innerHTML = 'Sorry, you died. You lose. Game Over.';
            document.getElementById('log').append(youlose);
            document.getElementById('log').innerHTML = 'Sorry, you died. You lose. Game Over.'
            document.getElementById('gameoverdiv').innerHTML = ''
        }
    }

        function froundend(){    
        //round end
        if(document.getElementById('log').innerHTML != 'You retreated. You live to fight another day. Game Over' && document.getElementById('log').innerHTML != 'Sorry, you died. You lose. Game Over.'){
            console.log('Round End');
            let nextround = document.createElement('li');
            nextround.innerHTML = '-----Round End------';
            document.getElementById('log').append(nextround);
        }
}

        function addstats(){
            document.getElementById('humanstats').textContent = 'Health = ' + ussAssembly.hull+ " | Firepower = " + ussAssembly.firepower + " | Accuracy = " + ussAssembly.accuracy
            document.getElementById('enemystats').textContent = 'Health = ' + alienArmy[0].hull + " | Firepower = " + alienArmy[0].firepower + " | Accuracy = " + alienArmy[0].accuracy
        }

   //game function
function spaceGame(){
    fhumanAttack();
    faliendies();
    fnomorealiens();
    falienattackshuman();
    fhumandies();
    froundend();
    addstats();
    window.scrollTo(0, 10000);
}
