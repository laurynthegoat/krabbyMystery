let question = document.querySelector(".question");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let option5 = document.querySelector(".option5");
let option6 = document.querySelector(".option6");
let option7 = document.querySelector(".option7");
let endStory = document.querySelector(".endStory");
let findFormula = document.querySelector(".findFormula");
let happy = document.querySelector(".happy");
let home = document.querySelector(".home");
let pic = document.querySelector(".picture");

option1.addEventListener("click", function (){
    question.innerHTML = "SpongeBob scans under the grill and a tiny trail of grease prints leading out of the kitchen and toward the dining area. The prints are small, way too small to belong to Mr. Krabs or Squidward. The trail leads toward the exit… and straight to the street outside. What will SpongeBob do next?";
    pic.src = "footprints.png";
    option1.style.display="none";
    option2.style.display="none";
    option3.style.display="initial";
    option4.style.display="initial";
});

option2.addEventListener("click", function (){
    question.innerHTML = "SpongeBob goes to the Chum Bucket to look for clues. He finds Plankton standing on a box, practicing his evil laugh. Plankton seems calm but suspicious. There’s a pair of binoculars on the floor, pointed straight at the Krusty Krab. It looks like someone has been spying on the restaurant. What should he do next?";
    pic.src = "interrogate.png"
    option1.style.display="none";
    option2.style.display="none";
    option5.style.display="initial";
    option6.style.display="initial";
});

option3.addEventListener("click", function (){
    question.innerHTML = "SpongeBob follows the footprints and OH NO! SpongeBob sets off a silly booby trap made by Plankton that covers the Krusty Krab in confetti";
    pic.src = "trap.png"
    option3.style.display="none";
    option4.style.display="none";
    endStory.style.display="initial";
});

option4.addEventListener("click", function (){
    question.innerHTML = "SpongeBob reports the footprints to Mr. Krabs but all he did was yell at SpongeBob to find the formula!";
    pic.src = "findFormula.png"
    option3.style.display="none";
    option4.style.display="none";
    findFormula.style.display="initial";
});

option5.addEventListener("click", function (){
    question.innerHTML = "SpongeBob looks through the binoculars to see what Plankton was watching. He spots something strange behind the Chum Bucket: <br> <em>a small metal hatch in the ground that’s partly open. There are tiny footprints leading right into it. SpongeBob realizes someone went into a secret underground tunnel with the formula.</em>";
    pic.src = "undergroundTunnel.png"
    option5.style.display="none";
    option6.style.display="none";
    option7.style.display="initial";
});

option6.addEventListener("click", function (){
    question.innerHTML = "SpongeBob brings the binoculars to Mr. Krabs but all he did was yell at SpongeBob to find the formula!";
    pic.src = "findFormula.png"
    option5.style.display="none";
    option6.style.display="none";
    findFormula.style.display="initial";
});

option7.addEventListener("click", function (){
    question.innerHTML = "SpongeBob climbs down into the secret hatch. Inside, he follows the tiny footprints through a small tunnel. He finds a little sea mouse sitting on a pile of shiny objects. The sea mouse has the Krabby Patty formula: <br><em> SpongeBob gently takes the formula back and climbs out of the tunnel.</em>";
    pic.src = "formulaFound.png"
    option7.style.display="none";
    happy.style.display="initial";
});

happy.addEventListener("click", function (){
    question.innerHTML = "<em>Mr. Krabs is happy, the formula is safe, and the Krusty Krab goes back to normal!</em>";
    pic.src = "everyoneHappy.png"
    option7.style.display="none";
    happy.style.display="none";
    home.style.display="initial";
});

endStory.addEventListener("click", function (){
    question.innerHTML = "It’s a bright morning in Bikini Bottom, and SpongeBob arrives at the Krusty Krab ready to flip patties but when he opens the fridge, the secret Krabby Patty formula is missing! <br>Mr. Krabs is panicking, Squidward doesn’t care, and Plankton’s been acting <em>extra suspicious</em>";
    pic.src = "missing formula.png"
    option3.style.display="none";
    option4.style.display="none";
    endStory.style.display="none";
    option1.style.display="initial";
    option2.style.display="initial";
});

findFormula.addEventListener("click", function (){
    question.innerHTML = "It’s a bright morning in Bikini Bottom, and SpongeBob arrives at the Krusty Krab ready to flip patties but when he opens the fridge, the secret Krabby Patty formula is missing! <br>Mr. Krabs is panicking, Squidward doesn’t care, and Plankton’s been acting <em>extra suspicious</em>";
    pic.src = "missing formula.png"
    option3.style.display="none";
    option4.style.display="none";
    findFormula.style.display="none";
    option1.style.display="initial";
    option2.style.display="initial";
});

home.addEventListener("click", function (){
    question.innerHTML = "It’s a bright morning in Bikini Bottom, and SpongeBob arrives at the Krusty Krab ready to flip patties but when he opens the fridge, the secret Krabby Patty formula is missing! <br>Mr. Krabs is panicking, Squidward doesn’t care, and Plankton’s been acting <em>extra suspicious</em>";
    pic.src = "missing formula.png"
    home.style.display="none";
    option1.style.display="initial";
    option2.style.display="initial";
});