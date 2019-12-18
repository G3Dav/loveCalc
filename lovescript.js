function love() {
  var yourName = (document.getElementById("yourName"));
  var theirName = (document.getElementById("theirName"));
  var result = (Math.random() * 100) + 1;
  var result = Math.floor(result);
  // document.getElementById("result").innerHTML = "Your compatability score is : " + result + "%.";

  if (result > 30 && result <= 70) {
    document.getElementById("result").innerHTML = "Your compatability score is : " + result + "%. Not too bad, but not good either.";
  }

  if (result <= 30) {
      document.getElementById("result").innerHTML = "Your compatability score is : " + result + "%. Just give it up already.";
  }


  if (result > 70) {
      document.getElementById("result").innerHTML = "Your compatability score is : " + result + "%. Ohhh snap. Start planning the wedding now!";
  }

}
