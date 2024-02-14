function play(){
    // hide the home page
    const homeScreen=document.getElementById('home-page');
    homeScreen.classList.add('hidden');

    // go to playground

    const playground=document.getElementById('playground');
    playground.classList.remove('hidden');

    
    // display random number
    const display=document.getElementById('display');
    display.innerText=generateRandomAlphabet();

    // key highlight

    const key=document.getElementById(display.innerText);
    key.style.backgroundColor='green';
    key.style.color='white'
    
}



function generateRandomAlphabet(){
    // generate random number
    const randomNumber=Math.round(Math.random()*25);

    const alphbets='abcdefghijklmnopqrstuvwxyz';
    const alpha=alphbets.split('');

    const randomAlphabet=alpha[randomNumber];
 return randomAlphabet;
}


