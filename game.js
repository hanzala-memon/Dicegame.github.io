

var scores, roundScore, activePlayer, gamePlaying;

init();




const canPlay = () => {
    
    const now = new Date();
        const hour = now.getHours();
    
        
        if (hour > 21 && hour < 23) {
            return false;
        } else {
            return true;
        }
}


// for rolling dice

document.querySelector('.btn-roll').addEventListener('click', function() {


    if(gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;




if(!canPlay()) {
 alert('You cant play game');
 return;
}




    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';



    if(dice !== 1) {
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }else {

        nextPlayer();
    }

}


});



//for holding score

document.querySelector('.btn-hold').addEventListener('click', function() {

    if(gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    
    
        if(scores[activePlayer] >= 100) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        } else {
            nextPlayer();
        } 
    }

   
});






function nextPlayer() {
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');


    document.querySelector('.dice').style.display = 'none';
}



//for new game



document.querySelector('.btn-new').addEventListener('click', init);



function init() {
    scores = [0, 0];
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;



    if(!canPlay()) {
        alert('You cant play game');
        return;
    }



    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';


    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';


    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');

    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}
















// const now = new Date();
// const hour = now.getHours();
// console.log(hour)