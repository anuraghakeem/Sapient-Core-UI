(function () {
    "use strict";
    var p1 = document.querySelector("#b1");
    var p2 = document.querySelector("#b2");
    var p3 = document.querySelector("#b3");
    var txt = document.querySelector("#txt");
    var scoreP1 = 0, scoreP2 = 0, maxScore = 7;
    var game = true;

    function incrementScoreOfP1() {

        if (game) {
            scoreP1++;
            document.querySelector("#p1").textContent = scoreP1;
            // alert("Hello");
            if (scoreP1 === maxScore) {
                game = false;
                document.querySelector("#p1").classList.add("green");
            }
        }
    }
    p1.addEventListener("click", incrementScoreOfP1);

    function incrementScoreOfP2() {

        if (game) {
            scoreP2++;
            document.querySelector("#p2").textContent = scoreP2;
            // alert("Hello");
            if (scoreP2 === maxScore) {
                game = false;
                document.querySelector("#p2").classList.add("green");
            }
        }
    }
    p2.addEventListener("click", incrementScoreOfP2);
    function resetGame() {
        game = true;
        scoreP1 = 0;
        scoreP2 = 0;
        document.querySelector("#p1").textContent = scoreP1;
        document.querySelector("#p2").textContent = scoreP2;
        document.querySelector("#p1").classList.remove("green");
        document.querySelector("#p2").classList.remove("green");
    }
    p3.addEventListener("click", resetGame);

    function changeMaxScore() {
        document.querySelector("#max").textContent = this.value;
        maxScore=Number(this.value);
        game=true;
        document.querySelector("#p1").classList.remove("green");
        document.querySelector("#p2").classList.remove("green");
        scoreP1 = 0;
        scoreP2 = 0;
        document.querySelector("#p1").textContent = scoreP1;
        document.querySelector("#p2").textContent = scoreP2;

    }
    txt.addEventListener("change", changeMaxScore);

}());

  // alert("Hello");