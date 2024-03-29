var power = 0;
let timer = null;
let coolDownTimer = null;

const MEAL_COUNT = 3;
const COOL_DOWN_COUNT = 5;

let mealCountDown = MEAL_COUNT;
let coolDownCountDown = COOL_DOWN_COUNT;

function getPower(number) {
    if (bonusPower > 1) {
        power += bonusPower + number;
    } else {
        power = power + number * upgradePower;
        console.log('there');
    }

    document.getElementById("power").innerHTML = power;
}

var upgradePower = 1
var bonusPower = 0

function upgradeSoldier() {
    var soldierMultCost = Math.floor (10 * Math.pow(1.1, upgradePower));
    if(power < soldierMultCost) return;
    upgradePower = upgradePower + 1;
    power = power - soldierMultCost;
    document.getElementById('upgradePower').innerHTML = upgradePower - 1
    document.getElementById('power').innerHTML = power
    console.log(soldierMultCost)

}

var trainer = 0;

function hireTrainer() {
    var trainerCost = Math.floor (10 + Math.pow(1.1,trainer));
    if(power < trainerCost) return;
    trainer = trainer +1;
    power = power - trainerCost;
    document.getElementById('trainer').innerHTML = trainer
    document.getElementById('trainerCost').innerHTML = trainerCost
    setInterval(() => getPower(trainer),500);
}

var barracks = 0;

function hireBarracks(){
    var barracksCost = Math.floor (100 * Math.pow(1.1,barracks)); 
    
    if(power < barracksCost) return;
    barracks = barracks +1;
    power = power - barracksCost;
    document.getElementById('barracks').innerHTML = barracks
    document.getElementById('power').innerHTML = power
    setInterval(() => getPower(barracks*5),500);
}

var bigBar = 0;

function hireBigBar(){
    var bigBarCost = Math.floor (10 * Math.pow(1.1,bigBar)); 
    if(power < bigBarCost) return;
    bigBar = bigBar +1;
    barracks = barracks - bigBarCost; 
    document.getElementById('bigBar').innerHTML = bigBar
    document.getElementById('barracks').innerHTML = barracks
    setInterval(() => getPower(bigBar*5),500);
}

var seconds = 0

function countDown() {
    seconds = setTimeout
    setTimeout (seconds, -1000)

}

function mealTime(){
    bonusPower = 10;
    document.getElementById('mealTimeTimer').innerHTML = mealCountDown;
    const cdLabel = document.getElementById('cool-down-label');
    cdLabel.innerHTML = coolDownCountDown;
    timer = setInterval(()=>{
        if (mealCountDown === 0) {
            clearTimeout(timer);
            startCooldown();
            return;
        };
        mealCountDown--;
        document.getElementById('mealTimeTimer').innerHTML = mealCountDown;
    }, 1000);
}

function startCooldown () {
    const button = document.getElementById('meal-time-button');
    const cdLabel = document.getElementById('cool-down-label');
    button.disabled = true;
    bonusPower = 0;

    coolDownTimer = setInterval(() => {
        coolDownCountDown--;
        cdLabel.innerHTML = coolDownCountDown;

        if(coolDownCountDown === 0) {
            mealCountDown = MEAL_COUNT;
            coolDownCountDown = COOL_DOWN_COUNT;
            clearTimeout(coolDownTimer);
            button.disabled = false;
            return;
        }
    }, 1000)
}


