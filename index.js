function rpsGame(yourChoice) {
    console.log(yourChoice);
    var humanChoice,botChoice;
    humanChoice = yourChoice.id;
    console.log(humanChoice);
    botChoice = numberToChoice(randToRpsInt());
    console.log(botChoice);
    frontItemHuman = humanChoice;
    frontItemBot = botChoice;
    result = decideWinner(humanChoice,botChoice);
    rpsFrontEnd(frontItemHuman,frontItemBot,result);
}
function randToRpsInt(){
    return Math.floor(Math.random() * 3);
}
function numberToChoice(number) {
    return ['rock','paper','scissors'][number];
}
function decideWinner(yourChoice,computerChoice){
    if (yourChoice == 'rock' && computerChoice == 'rock'){
        rd = 'DRAW';
    }else if (yourChoice == 'rock' && computerChoice == 'scissors'){
        rd = 'YOU WIN';
    }else if (yourChoice == 'rock' && computerChoice == 'paper'){
        rd = 'YOU LOSE';
    }else{
        if (yourChoice == 'paper' && computerChoice == 'paper'){
            rd = 'DRAW';
        }else if (yourChoice == 'paper' && computerChoice == 'rock'){
            rd = 'YOU WIN';
        }else if (yourChoice == 'paper' && computerChoice == 'scissors'){
            rd = 'YOU LOSE';
        }else {
            if (yourChoice == 'scissors' && computerChoice == 'scissors'){
                rd = 'DRAW';
            }
            if (yourChoice == 'scissors' && computerChoice == 'paper'){
                rd = 'YOU WIN';
            }
            if (yourChoice == 'scissors' && computerChoice == 'rock'){
                rd = 'YOU LOSE';
            }
            
             
        }
    }
    return rd;
}
function rpsFrontEnd(itemHuman,itemBot,reww){
    document.getElementById('rock').style.display='none';
    document.getElementById('paper').style.display='none';
    document.getElementById('scissors').style.display='none';

    document.getElementById('humandiv').style.display='block';
    document.getElementById('botdiv').style.display='block';
    document.getElementById('win').style.display='block';
    document.getElementById('reset').style.display='block';

    document.getElementById('humandiv').innerHTML=itemHuman;
    document.getElementById('botdiv').innerHTML=itemBot;
    document.getElementById('win').innerHTML=reww;
    
    
}
function reset(){
   location.reload();
}