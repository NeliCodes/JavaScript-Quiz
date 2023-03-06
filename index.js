const submitButton = document.querySelector('#btn');
submitButton.addEventListener('click', showResults);
var blocker = document.getElementById("blocker");
var scorer = document.getElementById("scorer");
var scorers = document.getElementById("score");
var correctAnswer = document.querySelectorAll("#correct1, #correct2, #correct3, #correct4, #correct5, #correct6, #correct7, #correct8, #correct9");
var notSelected = document.querySelectorAll('input[type="radio"]');

function showResults() {
    
  
  var score = 0;
  
  correctAnswer.forEach(function(element) {
    if (element.checked) {
        score++;
    } 
})

    
    function setDisplay() {
      scorer.style.display = "block";
      scorers.textContent = score + "/9";
      const nodes = document.querySelectorAll('#green'); 
      nodes.forEach(node => node.style.color = "green");
    }
    
    return setDisplay();
   
  }

  function myFunction() {
    blocker.style.display = "none";
    scorer.style.display = "none";
    
  }

