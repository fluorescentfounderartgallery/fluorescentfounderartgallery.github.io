// Input Enter //
var input = document.getElementById("code");

input.addEventListener("keyup", function(event) {

  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("button").click();
  }
});

// Check Code //
function checkCode() {
  var enteredCode = document.getElementById("code").value;
  var correctCode = "m4IaPk3";

  var index = document.getElementById("index");
  var main = document.getElementById("main");
  var body = document.getElementById("body");

  if (enteredCode == correctCode) {
    index.style.display = "none";
    main.style.display = "block";
    body.style.backgroundImage = "none";
    body.style.backgroundColor = "rgb(255, 218, 193)";
    body.style.color = "black";

    console.log("Correct code");
  }
  else {
    alert("Incorrect code, try again!");
    location.reload();

    console.log("Incorrect code")
    console.log("Reloading page...")
  }
}

// Home button (main page) //
function home() {
  var index = document.getElementById("index");
  var main = document.getElementById("main");
  var body = document.getElementById("body");
  var enteredCode = document.getElementById("code");

  index.style.display = "block";
  main.style.display = "none";
  body.style.backgroundImage = "url(background.jpg)";
  body.style.backgroundColor = "";
  body.style.color = "#FF9AA2";
  enteredCode.value = "";
}

// Menu button (main page) //
function menuOpen() {
    document.getElementById("open").style.display = "none";
    document.getElementById("close").style.display = "inline";

    document.getElementById("menuBody").style.display = "flex";
  }

function menuClose() {
    document.getElementById("close").style.display = "none";
    document.getElementById("open").style.display = "inline";

    document.getElementById("menuBody").style.display = "none";
  }

// Menu button (artwork page) //

function menuOpen1() {
    document.getElementById("open1").style.display = "none";
    document.getElementById("close1").style.display = "inline";

    document.getElementById("menuBody1").style.display = "flex";
    }

function menuClose1() {
    document.getElementById("close1").style.display = "none";
    document.getElementById("open1").style.display = "inline";

    document.getElementById("menuBody1").style.display = "none";
    }

// Back button (artwork page) //
function back() {
  document.getElementById("artwork").src = "";
  document.getElementById("artworkName").innerHTML = "";

  document.getElementById("description1").style.display = "none";
  document.getElementById("description2").style.display = "none";
  document.getElementById("description3").style.display = "none";
  document.getElementById("description4").style.display = "none";
  document.getElementById("description5").style.display = "none";
  document.getElementById("description6").style.display = "none";
  document.getElementById("description7").style.display = "none";
  document.getElementById("description8").style.display = "none";
  document.getElementById("description9").style.display = "none";
  document.getElementById("description10").style.display = "none";
  document.getElementById("description11").style.display = "none";
  document.getElementById("description12").style.display = "none";
  document.getElementById("description13").style.display = "none";
  document.getElementById("description14").style.display = "none";
  document.getElementById("description15").style.display = "none";
  document.getElementById("description16").style.display = "none";
  document.getElementById("description17").style.display = "none";
  document.getElementById("description18").style.display = "none";

  document.getElementById("main").style.display = "block";
  document.getElementById("artworkPage").style.display = "none";

  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  window.scroll(0, 1200);
}
  else {
  window.scroll(0, 440);
}

  column1Retract();
  menuClose1();
}

// Expand column1 //
function column1Expand() {
  column1Expanded.style.display = "block";
  document.getElementById("column1ExpandButton").style.display = "none";
}

// Retract column1 //
function column1Retract() {
  column1Expanded.style.display = "none";
  document.getElementById("column1ExpandButton").style.display = "block";
}

// Artwork Page //
var art1 = {
  artwork: "artworks/art1.jpg",
  artworkName: " Full Moon",
  p: "description1",
}

var art2 = {
  artwork: "artworks/art2.jpg",
  artworkName: "Mellow Octopus",
  p: "description2",
}

var art3 = {
  artwork: "artworks/art3.jpg",
  artworkName: "Origami Flowers",
  p: "description3",
}

var art4 = {
  artwork: "artworks/art4.jpg",
  artworkName: "Sunset",
  p: "description4",
}

var art5 = {
  artwork: "artworks/art5.jpg",
  artworkName: "Portrait of Junnah",
  p: "description5",
}

var art6 = {
  artwork: "artworks/art6.jpg",
  artworkName: "Flow",
  p: "description6",
}

var art7 = {
  artwork: "artworks/art7.jpg",
  artworkName: "Avocado",
  p: "description7",
}

var art8 = {
  artwork: "artworks/art8.jpg",
  artworkName: "Watermelon",
  p: "description8",
}

var art9 = {
  artwork: "artworks/art9.jpg",
  artworkName: "Flower 1",
  p: "description9",
}

var art10 = {
  artwork: "artworks/art10.jpg",
  artworkName: "Flower 2",
  p: "description10",
}

var art11 = {
  artwork: "artworks/art11.jpg",
  artworkName: "Flower 3",
  p: "description11",
}

var art12 = {
  artwork: "artworks/art12.jpg",
  artworkName: "Elegant Flower 1",
  p: "description12",
}

var art13 = {
  artwork: "artworks/art13.jpg",
  artworkName: "Elegant Flower 2",
  p: "description13",
}

var art14 = {
  artwork: "artworks/art14.jpg",
  artworkName: "Aspiration",
  p: "description14",
}

var art15 = {
  artwork: "artworks/art15.jpg",
  artworkName: "Abstract Woman",
  p: "description15",
}

var art16 = {
  artwork: "artworks/art16.jpg",
  artworkName: "Panda",
  p: "description16",
}

var art17 = {
  artwork: "artworks/art17.jpg",
  artworkName: "Blue Flower",
  p: "description17",
}

var art18 = {
  artwork: "artworks/art18.jpg",
  artworkName: "Dove of Peace and Enlightenment",
  p: "description18",
}

function artworkRedirect(art) {
  document.getElementById("artwork").src = art.artwork;
  document.getElementById("artworkName").innerHTML = art.artworkName;
  document.getElementById(art.p).style.display = "flex";
  window.scroll(0, 0);

  document.getElementById("main").style.display = "none";
  document.getElementById("artworkPage").style.display = "flex";
}
