
let nounOneInput;
let nounOneOutput;
let nounTwoInput;
let nounTwoOutput;
let nameInput;
let nameOutput;
let pronounInput;
let pronounOutput;
let verbInput;
let verbOutput;
let jobInput;
let jobOutput;

let placeInput;
let placeOutput;
let nounThreeInput;
let nounThreeOutput;
let nameTwoInput;
let nameTwoOutput;
let dateInput;
let dateOutput;
let verbTwoInput;
let verbTwoOutput;

let nameRepOutput;
let pronounRepOutput;

function initialize()
{
 nounOneInput = document.getElementById("valOne");
 nounTwoInput = document.getElementById("valTwo");
 nameInput = document.getElementById("valThree");
 pronounInput = document.getElementById("valFour");
 verbInput = document.getElementById("valFive");
 jobInput = document.getElementById("valSix");

 placeInput = document.getElementById("valSeven");
 nounThreeInput = document.getElementById("valEight");
 nameTwoInput = document.getElementById("valNine");
 dateInput = document.getElementById("valTen");
 verbTwoInput = document.getElementById("valEleven");

  nounOneOutput = document.getElementById("nounOne");
 nounTwoOutput = document.getElementById("nounTwo");
 nameOutput = document.getElementById("name");
 pronounOutput = document.getElementById("pronoun");
 verbOutput = document.getElementById("verb");
 jobOutput = document.getElementById("job");
 
 placeOutput = document.getElementById("place");
 nounThreeOutput = document.getElementById("nounThree");
 nameTwoOutput = document.getElementById("nameTwo");
 dateOutput= document.getElementById("date");
 verbTwoOutput = document.getElementById("verbTwo");
 
 nameRepOutput = document.getElementById("nameRep");
 pronounRepOutput = document.getElementById("pronounRep");


}

function createStory()
{
 nounOneOutput.innerHTML = nounOneInput.value;
 nounTwoOutput.innerHTML = nounTwoInput.value;
 nameOutput.innerHTML = nameInput.value;
 pronounOutput.innerHTML = pronounInput.value;
 verbOutput.innerHTML = verbInput.value;
 jobOutput.innerHTML = jobInput.value;
 
 placeOutput.innerHTML = placeInput.value;
 nounThreeOutput.innerHTML = nounThreeInput.value;
 nameTwoOutput.innerHTML = nameTwoInput.value;
 dateOutput.innerHTML = dateInput.value;
 verbTwoOutput.innerHTML = verbTwoInput.value;
 
 nameRepOutput.innerHTML = nameInput.value;
 pronounRepOutput = pronounInput.value;
 
 

}


