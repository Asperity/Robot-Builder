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
    display();
}
function increasePower(){
    if(powerLevel<powerLevelCap)
    {
        powerLevel++;
    }
    display();
}


function decreasePower(){
    if(powerLevel>0)
    {
        powerLevel--;
    }
    display();
}


function increaseSpeed(){
    if(topSpeed<topSpeedCap)
    {
        topSpeed++;
    }
    display();
}


function decreaseSpeed(){
    if(topSpeed>0)
    {
        topSpeed--;
    }
    display();
}


function increaseSI(){
    if(structuralIntegrity<structuralIntegrityCap)
    {
        structuralIntegrity++;
    }
    display();
}


function decreaseSI(){
    if(structuralIntegrity>0)
    {
        structuralIntegrity--;
    }
    display();
}


function display(){
    powerDisplay.innerHTML = "POWER LEVEL: "+powerLevel;
    speedDisplay.innerHTML = "SPEED: "+topSpeed;
    siDisplay.innerHTML = "SI: "+structuralIntegrity;
}
