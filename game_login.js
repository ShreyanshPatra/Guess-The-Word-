function addUser(){
  player_1 = document.getElementById("Player1_Name").value;
  player_2 = document.getElementById("Player2_Name").value;
  localStorage.setItem("player_1",player_1);
  localStorage.setItem("player_2",player_2);
  window.location = "game_page.html";
}