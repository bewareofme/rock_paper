          
       function computerPlay(){
        let number=Math.floor(Math.random()*3)+1;
        console.log(number)
        if (number ===1){
            return 'Rock';
        }
        else if (number ===2){
            return 'Scissors';
        }
        else {
            return 'Paper';
        }
    }
    function playRound(playerSelection,computerSelection){
        if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'Scissors' ||
        playerSelection.toLowerCase() === 'paper'&& computerSelection === 'Rock' ||
        playerSelection.toLowerCase() === 'scissors'&& computerSelection === 'Paper')
        {
            playerWin++;                         //This is not incementing my playerwin
            const disRound = document.querySelector('div.thisRound');
           // console.log(disRound);
            return disRound.textContent=`You Win! ${playerSelection.charAt(0).toUpperCase()+playerSelection.toLowerCase().slice(1)} beats ${computerSelection}`
            //return console.log(('You Win!'+' '+playerSelection.charAt(0).toUpperCase()+playerSelection.toLowerCase().slice(1)+' beats '+computerSelection ));
        }
        else if(computerSelection===(playerSelection.charAt(0).toUpperCase()+playerSelection.toLowerCase().slice(1))){
            const disRound = document.querySelector('div.thisRound')
            //console.log(disRound);
            return disRound.textContent='Draw'
            //return console.log('Draw');

        }
        else{
            computerWin++;
            const disRound = document.querySelector('div.thisRound');
            //console.log(disRound);
            return disRound.textContent=`You Lose! ${computerSelection} beats ${playerSelection.charAt(0).toUpperCase()+playerSelection.toLowerCase().slice(1)}`
        }
    }
    function game()
   // {
       // for(let i=0;i<5;i++)
        {
            let playerSelection=prompt('enter your choice');
            console.log(playRound(playerSelection,computerPlay()))
       // }
    if(playerWin>computerWin){console.log('you win the game');}
    else if(playerWin===computerWin){console.log('you Draw the game');}
    if(playerWin<computerWin){console.log('you lost the game');}
    }
    let playerWin=0;                               //playerwin declaration
    let computerWin=0;
    const rock =document.querySelector('button.rock');
        rock.addEventListener('click',() =>{
        const actual=document.querySelector('div.round')
        actual.textContent=`Round ${playerWin+computerWin}`
        playRound(playerSelection='rock',computerPlay())
        displayResult();
        finalResult();
        })
    const paper =document.querySelector('button.paper')
        paper.addEventListener('click',()=> {
        const actual=document.querySelector('div.round')
        actual.textContent=`Round ${playerWin+computerWin}`
        playRound(playerSelection='paper',computerPlay());
        displayResult();
        finalResult();
        })
    const scissor =document.querySelector('button.scissor')
        scissor.addEventListener('click',()=> {
        const actual=document.querySelector('div.round')
        actual.textContent=`Round ${playerWin+computerWin}`
        playRound(playerSelection='scissors',computerPlay());
        displayResult();
        finalResult();
        })
        function displayResult() {
            const finalResult=document.querySelector('div.result');
            finalResult.textContent=`Score ${playerWin}-${computerWin}`;
        }
        function finalResult(){
            const actual=document.querySelector('div.round')
            //const disRound = document.querySelector('div.thisRound');
            //disRound.textContent=`Round ${playerWin+computerWin}`
          if(playerWin===5){
              const actual=document.querySelector('div.round')
              actual.textContent='Huray you win!'
              playerWin=0;
              computerWin=0;
          }else if(computerWin===5){
            const actual=document.querySelector('div.round')
            actual.textContent='Dang you lose!'
            playerWin=0;
            computerWin=0;
          }
          else return;
        }
