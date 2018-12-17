var timerOn = false;
var timeRunning;
var time = 5;
var interimTime;
var questionNum;
var trivia = {
    "question1": "How long has Juicy J Been Rich?",
    "answer1": ["The late 80's.", "Juicy J been rich since the 90's.", "According to celebritynetworth.com Juicy J is not rich at all.", "None of the above."],
    "question2": "Whos is Juicy J's famous older brother?",
    "answer2": ["Whiz Kalifa", "Cheef Keef", "Project Pat", "Thanos"],
    "question3": "What does MGK mean?",
    "answer3": ["Michael Glenn Killarney", "Make Green Kites", "My Grass was Killed", "Machine Gun Kelley"],
    "question4": "Who is the most overrated rapper/rap group of all time?",
    "answer4": ["Don Quixote from Chipotle", "Insane Clown Posse", "Kanye West", "None of the Above"],


}

$(".hiddenQuestion").hide();
$(".hiddenButtons").hide();

$(document).ready(function () {
    $("#bgnBtn").on("click", function () {
        $(".hiddenQuestion").show("fast");
        $(".hiddenButtons").show("fast");
        $("#bgnBtn").hide();
        $(".activeQuestion").text(trivia.question1);
        $(".firstOne").text("  " + trivia.answer1[0] + "  ");
        $(".secondOne").text("  " + trivia.answer1[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer1[2] + "  ");
        $(".fourthOne").text("  " + trivia.answer1[3] + "  ");
        timerOn = true;
        timeRunning = setInterval(count, 1000);
        $(".timeLeft").text(timeRunning + " seconds remaining.");
    }
    )
    function count() {
        if (timerOn === true && time <= 5) {
            time--;
            var converted = timeConverter(time);
            $(".timeLeft").text(converted + " seconds remaining to answer this question.")
        }else if (timerOn === true && time == 0) {
            timerOn ===false;
            interimTime===true;
        }
    }
    function timeConverter(t) {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }
        return minutes + ":" + seconds;
    }
})




