//REFERENCES
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");

rock.onclick = function(){
    compare(1);
    alert(choice);
}
paper.onclick = function(){
    compare(2);
    alert(choice);
}
scissors.onclick = function(){
    compare(3);
    alert(choice);
}

function compare(choice){
    let AIanswer = Math.floor(Math.random()*3) + 1
    let AItext = "";
    let PLAYERtext = "";
    let WinStatus = "";
    
    switch(AIanswer) {
        case 1:
            AItext = "Rock";
            break;
        case 2:
            AItext = "Paper";
            break;
        case 3:
            AItext = "Scissors";
            break;
    }

    switch(choice) {
        case 1:
            PLAYERtext = "Rock";
            break;
        case 2:
            PLAYERtext = "Paper";
            break;
        case 3:
            PLAYERtext = "Scissors";
            break;
    }

    //Win logic
    if (AIanswer === choice){
        WinStatus = "Tie"
    }
    else if(choice === 1 && AIanswer === 3 || choice === 2 && AIanswer === 1 || choice === 3 && AIanswer === 2){
        WinStatus = "Win"
    }
    else {
        WinStatus = "Lose"
    }

    alert("The AI Chose " + AItext + "! You Chose " + PLAYERtext + "! " + WinStatus);


}