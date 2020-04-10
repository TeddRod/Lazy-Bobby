import {messages, youWin, youLose,startMsg } from "./data.js"

// --- get the date ---

var d = new Date();
var date = '-----| '+d.getHours()+':'+d.getMinutes()+' |-----';

var vibrate = new Audio(window.location.href + "materials/sound/fx/vibrate.wav");
var touch = new Audio(window.location.href + "materials/sound/fx/touch.wav");
var start = new Audio(window.location.href + 'materials/sound/fx/start.wav');

// --- original state ---

let bobby = {
    homiePoint : "",
    girlPoint : "",
    bossPoint : "",
    moolahPoint : "",
};

let sms = "";

// --- starting & ending message ---

const startBox = document.querySelector('#startGameScreen');
const endBox = document.querySelector('#endGameScreen');

// --- status bar elements ---

const strawberry = document.querySelector('#cellphone');
const homieStat = document.querySelector('#homieIcone');
const girlStat = document.querySelector('#girlfriendIcone');
const bossStat = document.querySelector('#bossIcone');
const moolahStat = document.querySelector('#moolahIcone');
const statBar = document.querySelector('#statusBar');
const grumpyCat = document.querySelector('#grumpy');
const starter = document.querySelector('starticone');

// --- SMS box ---

const smsField = document.querySelector('#smsField');
const senderBox = document.querySelector('#senderField');
const textBox = document.querySelector('#textField');

// --- buttons ---

const buttonBox = document.querySelector('#buttons');
const affBtn = document.querySelector('#rightBtn');
const negBtn = document.querySelector('#leftBtn');


// --- logique ---

init();


// --- functions ---

function init () {
    startBox.style.display = 'none';
    smsField.style.display = 'none';
    buttonBox.style.display = 'none';
    grumpyCat.style.display = 'none';
    statBar.style.display = 'none';
    

    bobby.homiePoint = 50;
    bobby.girlPoint = 50;
    bobby.bossPoint = 50;
    bobby.moolahPoint = 50;

    setTimeout (function() {
        startBox.innerHTML = startMsg[Math.floor(Math.random()*startMsg.length)]; 
        endBox.style.display = 'none';    
        startBox.style.display = 'block';
        starticone.style.display = 'block';
    }, 1000);
};
function smsLoader () {
    sms = messages[Math.floor(Math.random()*messages.length)];
    senderBox.innerHTML = date;
    textBox.innerHTML = "";
    affBtn.innerHTML = "Contacts";
    negBtn.innerHTML = "Menu";
    
    smsField.style.display = "block";
    buttonBox.style.display = "block";
    textBox.style.display = "none";
    grumpyCat.style.display= 'block';
    
    setTimeout (function() {
        senderBox.innerHTML = sms.sender;
        textBox.innerHTML = sms.text;
        affBtn.innerHTML = sms.affAnswer;
        negBtn.innerHTML = sms.negAnswer;
        textBox.style.display = "block";
        grumpyCat.style.display = 'none';
        strawberry.classList.add("shaking");
        displayStats();
        vibrate.play();
    }, 2700);
}; 

function displayStats() {
    homieStat.innerHTML = bobby.homiePoint;
    girlStat.innerHTML = bobby.girlPoint;
    bossStat.innerHTML = bobby.bossPoint;
    moolahStat.innerHTML = bobby.moolahPoint;
}; 

function hideStats() {
    homieStat.innerHTML = "";
    girlStat.innerHTML = "";
    bossStat.innerHTML = "";
    moolahStat.innerHTML = "";
}; 

function addAffPoints () {
    bobby.girlPoint += sms.affPoints[1];
    bobby.homiePoint += sms.affPoints[0];
    bobby.bossPoint += sms.affPoints[2];
    bobby.moolahPoint += sms.affPoints[3];
    displayStats();
    checkStat();
  
}; 

function addNegPoints () {
    bobby.homiePoint += sms.negPoints[0];
    bobby.girlPoint += sms.negPoints[1];
    bobby.bossPoint += sms.negPoints[2];
    bobby.moolahPoint += sms.negPoints[3];
    displayStats();
    checkStat();
}; 

function checkStat () {
console.log(bobby)

    // if win
if (bobby.homiePoint >= 100 ||
    bobby.girlPoint >= 100 ||
    bobby.bossPoint >= 100 ||
    bobby.moolahPoint >= 100) {

    if (
        bobby.homiePoint >= 100 &&
        bobby.girlPoint >= 100 &&
        bobby.bossPoint >= 100 &&
        bobby.moolahPoint>= 100
    )
        
    {
        endBox.innerHTML = youWin.hgbm[Math.floor(Math.random()*youWin.hgbm.length)];
        endBox.style.display = 'block';
    }
    
    else if (
        bobby.homiePoint >= 100 &&
        bobby.girlPoint >= 100 &&
        bobby.moolahPoint >= 100    
    )

    {
        endBox.innerHTML = youWin.hgm[Math.floor(Math.random()*youWin.hgm.length)];
        endBox.style.display = 'block'; 
    }

    else if (
        bobby.homiePoint >= 100 &&
        bobby.girlPoint >= 100   
    )

    {
        endBox.innerHTML = youWin.hg[Math.floor(Math.random()*youWin.hg.length)];
        endBox.style.display = 'block'; 
    }

    else if (
        bobby.girlPoint >= 100 &&
        bobby.moolahPoint >= 100    
    )

    {
        endBox.innerHTML = youWin.gm[Math.floor(Math.random()*youWin.gm.length)];
        endBox.style.display = 'block'; 
    }

    else 
        
    {
        endBox.innerHTML = youWin.else[Math.floor(Math.random()*youWin.else.length)];
        endBox.style.display = 'block'; 
            console.log("here")
    }
}

    // if lose

else  if (
    bobby.homiePoint <= 0 ||
    bobby.girlPoint <= 0 ||
    bobby.bossPoint <= 0 ||
    bobby.moolahPoint<= 0){

    if (
        bobby.homiePoint <= 0 &&
        bobby.girlPoint <= 0 &&
        bobby.bossPoint <= 0 &&
        bobby.moolahPoint<= 0
    )
        
    {
        endBox.innerHTML = youLose.hgbm[Math.floor(Math.random()*youLose.hgbm.length)];
        endBox.style.display = 'block';
    }
    
     else if (
        bobby.homiePoint <= 0 &&
        bobby.girlPoint <= 0 &&
        bobby.moolahPoint <= 0    
    )

    {
        endBox.innerHTML = youLose.hgm[Math.floor(Math.random()*youLose.hgm.length)];
        endBox.style.display = 'block'; 
    }

    else if (
        bobby.homiePoint <= 0 &&
        bobby.girlPoint <= 0   
    )

    {
        endBox.innerHTML = youLose.hg[Math.floor(Math.random()*youLose.hg.length)];
        endBox.style.display = 'block'; 
    }

    else if (
        bobby.girlPoint <= 0 &&
        bobby.moolahPoint <= 0    
    )

    {
        endBox.innerHTML = youLose.gm[Math.floor(Math.random()*youLose.gm.length)];
        endBox.style.display = 'block'; 
    }

    else 
    
    {
        endBox.innerHTML = youLose.else[Math.floor(Math.random()*youLose.else.length)];
        endBox.style.display = 'block';
    }
}

    // else

else {
    console.log("ici in else bottom")
     smsLoader();
}


};

//  --- onclicks ---

starticone.onclick = () => {
    displayStats();
    smsLoader();
    startBox.style.display = 'none';
    statBar.style.display = 'block';
    starticone.style.display = 'none';
    start.play();
};

affBtn.onclick = () => {
    senderBox.innerHTML = "";
    negBtn.innerHTML = "";
    touch.play();
    setTimeout (function() {
        textBox.innerHTML = "";
        affBtn.innerHTML = "";
        smsField.style.display = "none";
        buttonBox.style.display = "none";
        strawberry.classList.remove("shaking");
        addAffPoints();
       
    }, 1500);
};

negBtn.onclick = () => {
    senderBox.innerHTML = "";
    affBtn.innerHTML = "";
    touch.play();
    setTimeout (function() {
        textBox.innerHTML = "";
        negBtn.innerHTML = "";
        smsField.style.display = "none";
        buttonBox.style.display = "none";
        strawberry.classList.remove("shaking");
        addNegPoints();
        
        
    }, 1500);
};

endBox.onclick = () => {
    init();
    endBox.innerHTML="";
    hideStats();
    touch.play();
};