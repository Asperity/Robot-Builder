function initialize(){
    powerLevel = 0;
    powerLevelCap = 10;
    topSpeed = 0;
    topSpeedCap = 10;
    structuralIntegrity = 0;
    structuralIntegrityCap = 10;
    scanners = false;
    defenses = false;
    powerType = "none";
    powerDisplay = document.getElementById("power");
    speedDisplay = document.getElementById("speed");
    siDisplay = document.getElementById("si");
    showPower = document.getElementById("powerSource");
    showImage = document.getElementById("robotImage");
    getScanner = document.getElementById("scannerSlider");
    getDefenses = document.getElementById("defenseSlider");
    display();
}
function increasePower(){
    if(powerType == "none")
    {
        alert("No power type selected");
    }
    else
    {
        if(powerLevel<powerLevelCap)
        {
            powerLevel++;
        }
        display();
    }
}


function decreasePower(){
    if(powerType == "none")
    {
        alert("No power type selected");
    }
    else
    {
        if(powerLevel>0)
        {
            powerLevel--;
        }
        display();
    }
}


function increaseSpeed(){
    if(powerType == "none")
    {
        alert("No power type selected");
    }
    else
    {
        if(topSpeed<topSpeedCap)
        {
            topSpeed++;
        }
        display();
    }
}


function decreaseSpeed(){
    if(powerType == "none")
    {
        alert("No power type selected");
    }
    else
    {
        if(topSpeed>0)
        {
            topSpeed--;
        }
        display();
    }
}


function increaseSI(){
    if(powerType == "none")
    {
        alert("No power type selected");
    }
    else
    {
        if(structuralIntegrity<structuralIntegrityCap)
        {
            structuralIntegrity++;
        }
        display();
    }
}


function decreaseSI(){
    if(powerType == "none")
    {
        alert("No power type selected");
        
    }
    else
    {
        if(structuralIntegrity>0)
        {
            structuralIntegrity--;
        }   
        display();
    }
}

function changePower(power){
    powerType = power;
    if(powerType === hydro)
    {
        showPower.innerHTML = "Hydro";
    }
    if(powerType === nuclear)
    {
        showPower.innerHTML = "Nuclear";
    }
    if(powerType === solar)
    {
        showPower.innerHTML = "Solar";
    }
    updateValues();
}

function updateValues(){

    if(powerType === hydro){
        powerLevelCap = 8;
        topSpeedCap = 12;
        structuralIntegrityCap = 10;
        if(powerLevel > powerLevelCap)
        {
            powerLevel = 8;
        }
        if(topSpeed>topSpeedCap)
        {
            topSpeed = 12;
        }
        if(structuralIntegrity>structuralIntegrityCap)
        {
            structuralIntegrity = 10;
        }

    }
    if(powerType === nuclear){
        powerLevelCap = 12;
        topSpeedCap = 14;
        structuralIntegrityCap = 4;
        if(powerLevel>powerLevelCap)
        {
            powerLevel = 12;
        }
        if(topSpeed>topSpeedCap)
        {
            topSpeed = 14;
        }
        if(structuralIntegrity>structuralIntegrityCap)
        {
            structuralIntegrity = 4;
        }

    }
    if(powerType === solar)
    {
        powerLevelCap = 10;
        topSpeedCap = 10;
        structuralIntegrityCap = 10;
        if(powerLevel>powerLevelCap)
        {
            powerLevel = 10;
        }
        if(topSpeed>topSpeedCap)
        {
            topSpeed = 10;
        }
        if(structuralIntegrity>structuralIntegrityCap)
        {
            structuralIntegrity = 10;
        }
    }
    display();
}

function updateScanner()
{
    if(getScanner.checked == true)
    {
        scanners = true;
    }
    else
    {
        scanners= false;
    }
}

function updateDefenses()
{
    if(getDefenses.checked == true)
    {
        defenses = true;
    }
    else
    {
        defenses = false;
    }
}

function updateImage()
{
    if(powerType == hydro)
    {
        if(defenses)
        {
            showImage.src = "hydro-robot.webp";
        }
        else if(scanners)
        {
            showImage.src = "robot.png";
        }
        else
        {
            showImage.src = "water-turbine.jpg";
        }
    }
    else if(powerType == solar && scanners)
    {
        showImage.src = "solar-panel.webp";
        if(defenses)
        {
            showImage.src = "solarDrone.webp";
        }
    }
    else if(powerType == solar)
    {
        showImage.src = "scrap-metal.jpg";
    }
    else if(powerType == nuclear && defenses)
    {
        showImage.src = "missle.png";
        if(scanners)
        {
            showImage.src = "aimMissle.jpg";   
        }
    }
    else if(powerType == nuclear && !defenses)
    {
        showImage.src = "scrap-metal.jpg";
    }
}

function display(){
    powerDisplay.innerHTML = "POWER LEVEL: "+powerLevel;
    speedDisplay.innerHTML = "SPEED: "+topSpeed;
    siDisplay.innerHTML = "SI: "+structuralIntegrity;
}
