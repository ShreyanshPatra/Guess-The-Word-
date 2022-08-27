player1_name = localStorage.getItem("player_1");
player2_name = localStorage.getItem("player_2");

player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : ";
document.getElementById("player1_score").innerHTML = player1_score;

document.getElementById("player2_name").innerHTML = player2_name + " : ";
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "Question Turn : " + player1_name;
document.getElementById("player_answer").innerHTML = "Answer Turn : " + player2_name;

function send(){
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("word in lowercase = "+ word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    lenght_divide_2 = Math.floor(word.length/2);//z 
    charAt2 = word.charAt(lenght_divide_2); 
    console.log(charAt2); 

    lenght_minus_1 = word.length - 1; //z 
    charAt3 = word.charAt(lenght_minus_1); 
    console.log(charAt3); 

    remove_charAt1 = word.replace(charAt1, "_");//p_zza 
    remove_charAt2 = remove_charAt1.replace(charAt2, "_");//p_ _ za 
    remove_charAt3 = remove_charAt2.replace(charAt3, "_");//p_ _ _ a 
    console.log(remove_charAt3);

    question_word = "<h4> Q. "+ remove_charAt3 + "</h4>";
    input = "<br><br> <input id='input_box'>";
    btn = "<br><br> <button onclick='check()' class='btn btn-info'> Check </button>"; 
    row = question_word + input + btn;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check(){
    get_answer = document.getElementById("input_box").value;
    answer = get_answer.toLowerCase();
    console.log("answer is "+ answer);
    if(answer == word){
        if(answer_turn == "player1"){
            player1_score = player1_score+1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }
    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn-"+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn-"+player1_name;
    }
    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "Answer Turn-"+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "Answer Turn-"+player1_name;
    }
    document.getElementById("output").innerHTML = "";
}

