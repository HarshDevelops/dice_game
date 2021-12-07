function startnow(){
    document.getElementById("initial").style.display="none";
    document.getElementById("container").style.display="block";
    aftermath();
}

function aftermath(){
    var random1 = Math.random();
    random1 = (random1 * 5) + 1;
    random1 = Math.floor(random1);

    var random2 = Math.random();
    random2 = (random2 * 5) + 1;
    random2 = Math.floor(random2);

    var img1 = document.querySelectorAll("img")[0];
    imgt1 = "images/" + "dice" + random1 + ".png";
    img1.setAttribute("src", imgt1);

    var img2 = document.querySelectorAll("img")[1];
    imgt2 = "images/" + "dice" + random2 + ".png";
    img2.setAttribute("src", imgt2);

    if (random1 > random2) {
        // document.querySelector("h1").innerText = "Player 1 Wins";
        document.getElementById("result").innerHTML="Player 1 Wins";
    }
    else if (random1 === random2) {
        // document.querySelector("h1").innerText = "DRAW";
        document.getElementById("result").innerHTML="DRAW";
    }
    else {
        // document.querySelector("h1").innerText = "Player 2 Wins";
        document.getElementById("result").innerHTML="Player 2 Wins";
    }
}