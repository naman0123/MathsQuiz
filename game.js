player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_scorename").innerHTML = player1_name + ":";
document.getElementById("player2_scorename").innerHTML = player2_name + ":";

document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_ques").innerHTML = "Question Turn: " + player1_name;
document.getElementById("player_ans").innerHTML = "Answer Turn: " + player2_name;
