let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

let homeScoreTotal = 0;
let guestScoreTotal = 0;

function addScore(button)
{
    let x = button.id;  
    console.log(x); 

    switch(x) //uses button ID to add the correct amount to the correct team
    {
        case "home-1":
            homeScoreTotal += 1;
            homeScore.textContent = homeScoreTotal;
            break;
        case "home-2":
            homeScoreTotal += 2;
            homeScore.textContent = homeScoreTotal;
            break;
        case "home-3":
            homeScoreTotal += 3;
            homeScore.textContent = homeScoreTotal;
            break;
        case "guest-1":
            guestScoreTotal += 1;
            guestScore.textContent = guestScoreTotal;
            break;
        case "guest-2":
            guestScoreTotal += 2;
            guestScore.textContent = guestScoreTotal;
            break;
        case "guest-3":
            guestScoreTotal += 3;
            guestScore.textContent = guestScoreTotal;
            break;
    }
}

function reset()
{
    homeScoreTotal = 0;
    guestScoreTotal = 0;
    homeScore.textContent = 0;
    guestScore.textContent = 0;
}
