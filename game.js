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

function send()
{
    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    if(number1 == null || number2 == null || number1 == "" || number2 == "" || number1 == " " || number2 == " " || !/^[0-9]+$/.test(number1) || !/^[0-9]+$/.test(number2))
    {
        document.getElementById("error_exception").style.display = "block";
        return;
    }
    answer = parseInt(number1) * parseInt(number2);
    question = `<h4>${number1}X${number2}</h4>`;
    input_box = `<br/>Answer: <input type="text" id="input_user_answer">`;
    checkBtn = `<br/><br/><button class="btn btn-info" id="checkBtn" onclick="check()">Check</button>`;
    row = question + input_box + checkBtn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";
}

function init()
 {
     document.getElementById("error_exception").style.display = "none";
 }