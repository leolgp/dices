const btn = document.getElementById('roll')
btn.addEventListener('click', jogarDados)
var player1 = { name: '', turn: true, score: 0, allScores:[]}
var player2 = { name: '', turn: false, score: 0, allScores:[]}
var game = { numberRounds:'', roundCount:0}
let count =1 

function newGame(){
        location.reload()
}

function jogarDados(){

        
        if(game.roundCount  === game.numberRounds){
                gameOver()
                return
        } 
        
        if((game.roundCount+1)%2 === 0){
                count++
        }

         

        var RollingDices = new Audio('../src/audio/dice.wav');
        RollingDices.play();
        
        
        document.getElementById('currentRound').innerHTML = `Round: ${count}`
        dice1(6)
        dice2(6)
        let z = x + y
        console.log(x +' '+ y);
        document.getElementById('dice1').innerHTML = `<img src='src/imagem/dado${x}.png' class=dice>`
        document.getElementById('dice2').innerHTML = `<img src='src/imagem/dado${y}.png' class=dice>`
        document.getElementById('result1stdice').innerHTML = `1st dice is ${x}` 
        document.getElementById('result2nddice').innerHTML = `2nd dice is ${y}` 
        document.getElementById('result').innerHTML = `You got ${z}` 
        if (player1.turn){
                player1.score += z
                document.getElementById('scorePlyr1').innerHTML = `Score ${player1.score}`   
                player1.turn = false   
                player1.allScores.push(z);  
        } else {
                player2.score += z
                document.getElementById('scorePlyr2').innerHTML = `Score ${player2.score}`
                player1.turn = true  
                player2.allScores.push(z);   
        }
        document.getElementById('turnSentence').innerHTML = `whose turn is now?`;
        
        
        if (player1.turn){
        document.getElementById('turn').innerHTML = `${player1.name} <br><img src='src/imagem/a-btn.png'>`
        } else {
        document.getElementById('turn').innerHTML = `${player2.name} <br><img src='src/imagem/b-btn.png'>`
        }
        
        game.roundCount+=0.5

     
        
}



function dice1(number){
        let numeroAleatorio = (Math.floor(Math.random()*(number+1)));
        if( numeroAleatorio !== 0){
        x = numeroAleatorio
        } else{
        dice1(number)
        }
        return x 
}

function dice2(number){
        let numeroAleatorio = (Math.floor(Math.random()*(number+1)));
        if( numeroAleatorio !== 0){
        y = numeroAleatorio
        } else{
        dice2(number)
        }
        return y 

        
}

function setup(){

        
        
        document.getElementById('back-game').style.display ='inline-block'
       
        let player1Name = document.getElementsByName('player1')
        player1.name = player1Name[0].value;
        
        let player2Name = document.getElementsByName('player2')
        player2.name = player2Name[0].value;

        let roundSetUp = document.getElementsByName('rounds')
        game.numberRounds = roundSetUp[0].value;

        if(game.numberRounds > 5){
                alert('choose at most 5 rounds, please')
                return
        }
        

     if(player1.name === ''|| player2.name === '' || game.numberRounds === ''){
             alert('fill out your names and # of rounds, please')
             return
     }
        game.numberRounds = parseInt(roundSetUp[0].value);

        document.getElementById('section-players').remove()

        document.getElementById('rounds').innerHTML = `Number of Rounds: ${game.numberRounds}`
        document.getElementById('currentRound').innerHTML = `Round: ${game.roundCount}`

        document.getElementById('title1').innerHTML = player1.name
        document.getElementById('title2').innerHTML = player2.name
        document.getElementById('roll').style.display = 'inline-block'
        
        document.getElementById('scorePlyr1').innerHTML = `Score ${player1.score}`
        document.getElementById('scorePlyr2').innerHTML = `Score ${player2.score}`

        document.getElementById('turnSentence').innerHTML = `whose turn is now?`;
        
        
        if (player1.turn){
                document.getElementById('turn').innerHTML = `${player1.name} <br><img src='src/imagem/a-btn.png'>`        } else {
        document.getElementById('turn').innerHTML = `${player2.name} <br><img src='src/imagem/b-btn.png'>`       
        }
        

}
 

function gameOver(){
        document.getElementById('back-game').style.display ='none'
        document.getElementById('roll').style.display ='none'
        document.getElementById('data').style.display ='none'
        console.log(player1.score);
        console.log(player2.score);
        if(player1.score > player2.score){
                document.getElementById('endGameSentence').innerHTML = `the winner is ${player1.name},`
                document.getElementById('winner').innerHTML = `who got ${player1.score} points,`
                document.getElementById('winnerScore').innerHTML = `by (${player1.allScores})`
                document.getElementById('loser').innerHTML = ` ${player2.name} got only`
                document.getElementById('loserScore').innerHTML = `${player2.score} by(${player2.allScores}). Better luck next time.`


        } else if(player1.score < player2.score){
        document.getElementById('endGameSentence').innerHTML = `the winner is ${player2.name},`
        document.getElementById('winner').innerHTML = `who got ${player2.score} points,`
        document.getElementById('winnerScore').innerHTML = `(${player2.allScores})`
        document.getElementById('loser').innerHTML = ` ${player1.name} got only`
        document.getElementById('loserScore').innerHTML = `${player1.score} by (${player1.allScores}). Better luck next time.`
        } else {
                document.getElementById('endGameSentence').innerHTML = `Unbelievable. It is a draw`
        }

        document.getElementById('playAgain').innerHTML = "<br><button onclick=newGame() id='newGame'>Play Again </button>"

        

}