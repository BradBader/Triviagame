var timerOn = false;
var timeRunning;
var time = 20;
var questionNum;
var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unAnswered = 0;
var trivia = {
    "question0": "Who is the terror that quacks in the night?",
    "answer0": ["Darkwing Duck", "Howard the Duck", "Mallard Ducks", "All ducks on the endangered list."],
    "question1": "What are the names of the Rescue Rangers?",
    "answer1": ["Batman and Robin", "the Police", "Chip and Dale", "Pooh and Eyore"],
    "question2": "When there's trouble, who do you call?",
    "answer2": ["911", "Ghostbusters!", "Batman", "D W ya"],
    "question3": "What show is Clayface from?",
    "answer3": ["Doc McStuffins", "QVC", "Batman the Animated Series", "TMNT"],
    "question4": "What happens when evil Shredder Attacks?",
    "answer4": ["These turtle boys don't cut him no slack!", "He jams, and your paper gets stuck, real bad.", "April O'Neil is always on the scene to report!", "He makes turtle soup!"],
    "question5": "Who has a battlecry of 'SPOON!?!'",
    "answer5": ["Chef Boyardee", "Campbell", "Newman", "The Tick"],
    "question6": "Who is Rita's nemesis?",
    "answer6": ["Jennifer Lopez", "Zordon", "Cartman", "Krang"],
    "question7": "What was Mark Hamill's best role?",
    "answer7": ["Luke Skywalker in TLJ.", "The star of the hit movie 'Contact'.", "Voiceover on Rice-A-Roni commercials.", "The voice of the Joker in BTAS."],
    "question8": "Who are Goliath and Demona?",
    "answer8": ["Doug's friends.", "Codenames for Ren and Stimpy.", "Characters on the hit show 'Talespin'.", "Gargoyles."],
    "question9": "Which of these characters were NOT in the 90's X-men cartoon?",
    "answer9": ["Forge", "Wolverine", "Morph", "Hawkeye"],


}

$("h4").mouseover(function () {
    if (currentQuestion < 10 && time > 0) {
        $(this).addClass("highlighting").attr("<button>");;
    }


});

$("h4").mouseout(function () {
    if (currentQuestion < 10 && time > 0) {
        $(this).removeClass("highlighting");
    }
});

$(".hiddenQuestion").hide();
$(".hiddenButtons").hide();

function rightOrWrong() {
    if ($(this).val() == "winner" && time > 0) {
        hideAll();
        console.log("a button with the winning value was pressed")
        $(".hiddenQuestion").show("fast").html("<h2 class='sdow'>That's Right, You got that Right!");
        correctAnswers++;
        setTimeout(function () { nextQuestion() }, 1000);
        setTimeout(function () { questionCycle() }, 2000);
    } else {
        // if ($(this).val() != "winner") {
        hideAll();
        $(".hiddenQuestion").html("<h2 class='sdow'>That's incorrect!").show("fast");
        incorrectAnswers++;
        setTimeout(function () { nextQuestion() }, 1000);
        setTimeout(function () { questionCycle() }, 2000);
    }
}


function hideAll() {
    $(".hiddenQuestion").hide();
    $(".hiddenButtons").hide();
    $("#bgnBtn").hide();
}

function showQA() {
    $(".hiddenQuestion").show("fast");
    $(".hiddenButtons").show("fast");
}

function nextQuestion() {
    resetValue();
    currentQuestion++;
    console.log(" the current question just changed, the new value is as shown." + currentQuestion)
    time = 20;
}

function resetValue() {
    $(".firstOne").val("");
    $(".secondOne").val("");
    $(".thirdOne").val("");
    $(".fourthOne").val("");

}

function correctAnswersFunction() {
    hideAll()
    $(".hiddenQuestion").text("That's Right, You got that Right!").show("fast");
}

function questionCycle() {
    if (currentQuestion == 0 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question0);
        $(".firstOne").val("winner").text("  " + trivia.answer0[0] + "  ").click(rightOrWrong);
        $(".secondOne").text("  " + trivia.answer0[1] + "  ").click(rightOrWrong);
        $(".thirdOne").text("  " + trivia.answer0[2] + "  ").click(rightOrWrong);
        $(".fourthOne").text("  " + trivia.answer0[3] + "  ").click(rightOrWrong);
    } else if (currentQuestion == 1 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question1);
        $(".firstOne").text("  " + trivia.answer1[0] + "  ");
        $(".secondOne").text("  " + trivia.answer1[1] + "  ");
        $(".thirdOne").val("winner").text("  " + trivia.answer1[2] + "  ");
        $(".fourthOne").text("  " + trivia.answer1[3] + "  ");
    } else if (currentQuestion == 2 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question2);
        $(".firstOne").text("  " + trivia.answer2[0] + "  ");
        $(".secondOne").text("  " + trivia.answer2[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer2[2] + "  ");
        $(".fourthOne").val("winner").text("  " + trivia.answer2[3] + "  ");
    } else if (currentQuestion == 3 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question3);
        $(".firstOne").text("  " + trivia.answer3[0] + "  ");
        $(".secondOne").text("  " + trivia.answer3[1] + "  ");
        $(".thirdOne").val("winner").text("  " + trivia.answer3[2] + "  ");
        $(".fourthOne").text("  " + trivia.answer3[3] + "  ");

    } else if (currentQuestion == 4 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question4);
        $(".firstOne").val("winner").text("  " + trivia.answer4[0] + "  ");
        $(".secondOne").text("  " + trivia.answer4[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer4[2] + "  ");
        $(".fourthOne").text("  " + trivia.answer4[3] + "  ");
    } else if (currentQuestion == 5 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question5);
        $(".firstOne").text("  " + trivia.answer5[0] + "  ");
        $(".secondOne").text("  " + trivia.answer5[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer5[2] + "  ");
        $(".fourthOne").val("winner").text("  " + trivia.answer5[3] + "  ");
    } else if (currentQuestion == 6 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question6);
        $(".firstOne").text("  " + trivia.answer6[0] + "  ");
        $(".secondOne").val("winner").text("  " + trivia.answer6[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer6[2] + "  ");
        $(".fourthOne").text("  " + trivia.answer6[3] + "  ");
    } else if (currentQuestion == 7 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question7);
        $(".firstOne").text("  " + trivia.answer7[0] + "  ");
        $(".secondOne").text("  " + trivia.answer7[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer7[2] + "  ");
        $(".fourthOne").val("winner").text("  " + trivia.answer7[3] + "  ");
    } else if (currentQuestion == 8 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question8);
        $(".firstOne").text("  " + trivia.answer8[0] + "  ");
        $(".secondOne").text("  " + trivia.answer8[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer8[2] + "  ");
        $(".fourthOne").val("winner").text("  " + trivia.answer8[3] + "  ");
    } else if (currentQuestion == 9 && time > 0) {
        showQA();
        $(".hiddenQuestion").html("<h2>" + trivia.question9);
        $(".firstOne").text("  " + trivia.answer9[0] + "  ");
        $(".secondOne").text("  " + trivia.answer9[1] + "  ");
        $(".thirdOne").text("  " + trivia.answer9[2] + "  ");
        $(".fourthOne").val("winner").text("  " + trivia.answer9[3] + "  ");
    }else if (currentQuestion >= 10 || time <= 0) {
            timerOn === false;
            $(".timeleft").hide();
            hideAll()
            $("h4").html("<h3>")
            $(".hiddenQuestion").show("fast").html("<h2>YOU'RE DONE SON!");
            $(".hiddenButtons").show("fast")
            $(".firstOne").text("You guessed: " + correctAnswers + " correctly!");
            $(".secondOne").text("You choose poorly: " + incorrectAnswers + " times!")
            $(".thirdOne").text("You didn't even guess: " + unAnswered + " times!")
            $(".fourthOne").html("<iframe src='https://giphy.com/embed/cOB8cDnKM6eyY' width='480' height='270' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>");

        }
    }

    $(document).ready(function () {
        $("#bgnBtn").on("click", function () {
            timerOn = true;
            timeRunning = setInterval(count, 1000);
            $("#bgnBtn").hide();
            questionCycle();
        })

        function count() {
            if (timerOn === true && time >= 1) {
                time--;
                var converted = timeConverter(time);
                $(".timeLeft").text(converted + " seconds remaining to answer this question.")
            } else if (timerOn === true && time <= 0 && currentQuestion <= 3) {
                unAnswered++;
                hideAll();
                nextQuestion();
                questionCycle();
            } else if (currentQuestion >= 4) {
                timerOn === false;

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
        }
    })

