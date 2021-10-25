 function adduser()
 {
    player1_name = document.getElementById("player1_user").value;
    player2_name = document.getElementById("player2_user").value;
    if(player1_name == null || player2_name == null || player1_name == "" || player2_name == "" || player1_name == " " || player2_name == " " || !/^[a-zA-Z]/.test(player1_name) || !/^[a-zA-Z]/.test(player2_name))
    {
        document.getElementById("error_exception").style.display = "block";
        return;
    }
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    document.getElementById("error_exception").style.display = "none";
    window.location = "game_page.html";
 }

 function init()
 {
     document.getElementById("error_exception").style.display = "none";
 }