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
  var correctCode = "m4laPk3";

  if (enteredCode == correctCode) {
    document.getElementById("codeScreen").style.display = "none";
    document.getElementById("extras").style.display = "flex";
    console.log("Correct code");
  }
  else {
    alert("Incorrect code, try again!");
    location.reload();

    console.log("Incorrect code")
    console.log("Reloading page...")
  }
}

// Back Button //
function back() {
  window.history.back();
}

// Show Extras //
var gifts = document.getElementById("gifts");
var surprise = document.getElementById("surprise");
var bonus = document.getElementById("bonus");
var about = document.getElementById("about");

function show(extra) {
  gifts.style.display = "none";
  surprise.style.display = "none";
  bonus.style.display = "none";
  about.style.display = "none";

  extra.style.display = "flex";

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    window.scroll(0, 1050);
  }
    else {
    window.scroll(0, 420);
  }
}

// Hide Blur //
function hideBlur() {
  document.getElementById("blur").style.filter = "none";
}
