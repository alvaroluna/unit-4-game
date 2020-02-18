function GetRandomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function TestInput() { console.log("button pressed!") }

function ResetScore() {
    $("#randomNumTarget").text("00");
}

function Main() {
    function AddCrystalScore(event) {
        var randomNum = GetRandomInt()

        if (event.data.crystal === "blue") {
            totalScore += blueCrysRanScore;
            $("#currentScore").text(totalScore);
            console.log(totalScore);
        }
        if (event.data.crystal === "silver") {
            totalScore += silverCrysRanScore;
            $("#currentScore").text(totalScore);
            console.log(totalScore);
        }
        if (event.data.crystal === "orange") {
            totalScore += orangeCrysRanScore;
            $("#currentScore").text(totalScore);
            console.log(totalScore);
        }
        if (event.data.crystal === "pink") {
            totalScore += pinkCrysRanScore;
            $("#currentScore").text(totalScore);
            console.log(totalScore);
        }

        return (totalScore);
    }

    // establish initial random target score
    var randomNumTarget = GetRandomInt(19, 120);
    $("#randomNumTarget").text(randomNumTarget);

    // total current user score
    var totalScore = 0;

    var blueCrysRanScore = GetRandomInt(1, 12);
    var silverCrysRanScore = GetRandomInt(1, 12);
    var orangeCrysRanScore = GetRandomInt(1, 12);
    var pinkCrysRanScore = GetRandomInt(1, 12);

    var wins = 0;
    var loses = 0;

    //  This code will run as soon as the page loads.
    window.onload = function () {
        // HOW DO I FEED VARIABLES TO EVENTS?
        $("#blueCrystalButton").click({ crystal: "blue" }, AddCrystalScore);
        $("#silverCrystalButton").click({ crystal: "silver" }, AddCrystalScore);
        $("#orangeCrystalButton").click({ crystal: "orange" }, AddCrystalScore);
        $("#pinkCrystalButton").click({ crystal: "pink" }, AddCrystalScore);
    };

    if (totalScore === randomNumTarget) {
        alert("You Win!");

        wins++;
        $("#wins").text("Wins " + wins);

        ResetScore()
    }
    if (totalScore > randomNumTarget) {
        alert("You Lose!");

        loses++;
        $("#loses").text("Loses " + loses);

        ResetScore()
    }

    console.log(totalScore);

    // setTimeout(ResetScore, 1000)

}

Main()
