
let imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'assets/rock.png';

imgArray[1] = new Image();
imgArray[1].src = 'assets/paper.png';

imgArray[2] = new Image();
imgArray[2].src = 'assets/scissors.png';



function selectCompChoice ()
{
   return Math.floor(Math.random() * 3);
}

function display(userChoice, compChoice)
{
    let userPlace = document.getElementById('userPlace');
    let compPlace = document.getElementById('enemyPlace');
    
    userPlace.setAttribute('src' , imgArray[userChoice].src);
    compPlace.setAttribute('src' , imgArray[compChoice].src);
}

function checkResult(userChoice)
{
    let compChoice = selectCompChoice();
    let resultElement = document.getElementById('result');
    
    
    display(userChoice, compChoice);
    if ((userChoice == 0 && compChoice == 2) || (userChoice == 1 && compChoice == 0) || (userChoice == 2 && compChoice == 1))
    {
        resultElement.innerHTML = "You Win!";
        
    }
    
    else if ((userChoice == 0 && compChoice == 1) || (userChoice == 1 && compChoice == 2) || (userChoice == 2 && compChoice == 0))
    {
        resultElement.innerHTML = "You Lose!";
    }
    
    else 
    {
        resultElement.innerHTML = "It's a Tie!";
    }
    console.log(userChoice, compChoice);

}