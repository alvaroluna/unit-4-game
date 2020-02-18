function GetRandomInt(min, max) {
    return Math.floor(Math.random() * ((max + 1) - min) + min);
}

function TestInput() { console.log("button pressed!") }

function Main() {
    function AddCrystalScore(event) {
        var randomNum = GetRandomInt()

        if (event.data.crystal === "blue") {
            currentScore += blueCrysRanScore;
            $("#currentScore").text(currentScore);
            console.log(currentScore);
        }
        if (event.data.crystal === "silver") {
            currentScore += silverCrysRanScore;
            $("#currentScore").text(currentScore);
            console.log(currentScore);
        }
        if (event.data.crystal === "orange") {
            currentScore += orangeCrysRanScore;
            $("#currentScore").text(currentScore);
            console.log(currentScore);
        }
        if (event.data.crystal === "pink") {
            currentScore += pinkCrysRanScore;
            $("#currentScore").text(currentScore);
            console.log(currentScore);
        }

        if (currentScore === randomNumTarget) {
            alert("You Win!");

            wins++;
            $("#wins").text("Wins " + wins);

            currentScore = 0;
            $("#currentScore").text("00")

            randomNumTarget = GetRandomInt(19, 120);
            $("#randomNumTarget").text(randomNumTarget);
        }
        if (currentScore > randomNumTarget) {
            alert("You Lose!");

            loses++;
            $("#loses").text("Loses " + loses);

            currentScore = 0;
            $("#currentScore").text("00")

            randomNumTarget = GetRandomInt(19, 120);
            $("#randomNumTarget").text(randomNumTarget);
        }
    }

    // establish initial random target score
    var randomNumTarget = GetRandomInt(19, 120);
    $("#randomNumTarget").text(randomNumTarget);

    // total current user score
    var currentScore = 0;

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
}

Main()
