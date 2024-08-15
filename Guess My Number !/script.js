document.addEventListener('DOMContentLoaded',function(){
    const modal=document.querySelector('#termsmodal')
    const btnclick=document.querySelector('#acceptBtn')
    const content=document.querySelector('.blureffect')

    modal.style.display='block'
    content.classList.add("blur")
    btnclick.onclick=function(){
        modal.style.display='none';
        content.classList.remove('blur')
        startgame();//here we start the game
    }
})

function startgame(){
alert("Really you want to play ?🤔")
var a=prompt("Enter your name....")
document.getElementById("name").textContent=a;

let secretnum=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;

const displaymsg=function(msg){
    document.querySelector('.message').textContent=msg;
}

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);
    //when there is no input
    if(!guess){
        displaymsg('You dont have any number to guess 😂')
    }
    else if(guess==secretnum){
        displaymsg('🙌Yay you have guess the correct number')
        //we have to show the secret number
        document.querySelector('.number').textContent=secretnum;

        document.querySelector('body').style.backgroundColor='yellow';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    }
    //when guess is wrong
    else if(guess!=secretnum){
        if(score>1){
            displaymsg(guess>secretnum?'📈 Too high! try again' : '📉 Too low!try again');
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            displaymsg('🥲Ohh you lost the game...PLAY AGAIN!!!')
            document.querySelector('.score').textContent=0;
        }
    }
});
//if we want to play again
document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secretnum=Math.trunc(Math.random()*20)+1;

    displaymsg('Start guessing...')
    document.querySelector('.score').textContent=score
    document.querySelector('.number').textContent='?'
    document.querySelector('.guess').value='';

    document.querySelector('body').style.backgroundColor='linear-gradient(to right, #0e000f, #610707)'
    document.querySelector('.number').style.width='15rem'
});
}