function initialize(){
    powerLevel = 0;
    powerLevelCap = 10;
    topSpeed = 0;
    topSpeedCap = 10;
    structuralIntegrity = 0;
    structuralIntegrityCap = 10;
    scanners = false;
    defensiveSystem = false;
    powerType = "none";
    powerDisplay = document.getElementById("power");
    speedDisplay = document.getElementById("speed");
    siDisplay = document.getElementById("si");
}
function increasePower(){
    if(powerLevel<powerLevelCap)
    {
        powerLevel++;
    }
}

function decreasePower(){
    if(powerLevel>0)
    {
        powerLevel--;
    }
}

function increaseSpeed(){
    if(topSpeed<topSpeedCap)
    {
        topSpeed++;
    }
}

function decreaseSpeed(){
    if(topSpeed>0)
    {
        topSpeed--;
    }

}

function increaseSI(){
    if(structuralIntegrity<structuralIntegrityCap)
    {
        structuralIntegrity++;
    }
}

function decreaseSI(){
    if(structuralIntegrity>0)
    {
        structuralIntegrity--;
    }

}

function display(){
    powerDisplay.innerHTML = powerLevel;
    speedDisplay.innerHTML = topSpeed;
    siDisplay.innerHTML = structuralIntegrity;
}
