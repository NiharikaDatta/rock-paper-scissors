const rock=document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');
rock.addEventListener('click', () => play('Rock'));
paper.addEventListener('click', () => play('Paper'));
scissors.addEventListener('click', () => play('Scissors'));
let score = JSON.parse(localStorage.getItem('score')); //bc we need obj
scoring();
function play(humanMove)
{
  const randomnum=Math.random();
  let compMove = "";
  if(randomnum>=0 && randomnum<=1/3)
  compMove="Rock";
  else if(randomnum>1/3 && randomnum<=2/3)
  compMove="Paper"
  else
  compMove="Scissors";
  let result=""; //let when value will change. like let mut in rust.
  const rules = { //const when we know value won't change so we do this to be safe. like normal let in rust
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper"
  };
  if(humanMove===compMove)
  {
    result="Tie";
    score.Tie+=1;
  }
  else if(rules[humanMove]===compMove)
  {
    result="You win";
    score.Wins+=1;
  }
  else
  {
    result="Computer wins";
    score.Loss+=1;
  }
  resulting(result);
  moves(humanMove, compMove);
  scoring();
  localStorage.setItem('score', JSON.stringify(score)); //only stores strings
}
function ResetScore()
{
  score.Wins=0;
  score.Loss=0;
  score.Tie=0;
  document.querySelector('.Result').innerHTML = "Play!";
  document.querySelector('.Moves').innerHTML = "Pick a Move!";
  scoring();
}
function scoring()
{
  document.querySelector('.Score').innerHTML = `Ties: ${score.Tie} Loss: ${score.Loss} Win: ${score.Wins}`;
}
function moves(human, computer)
{
  document.querySelector('.Moves').innerHTML = `You <img src="images/${human}-emoji.png" class="icon">  <img src="images/${computer}-emoji.png" class="icon">  Computer`;
}
function resulting(result)
{
  document.querySelector('.Result').innerHTML = result;
}