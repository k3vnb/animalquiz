$(document).ready(function() {
  $("form#animal-quiz").submit(function(event) {
    var color = $("select#color").val();
    var size = $("select#size").val();

    if (size === "small" && color === "hot") {
      alert("Chinchilla");
    } else if (size === "small" && color === "cool") {
      alert("Blue-jay");
    } else if (size === "large" && color === "hot") {
      alert("Lion");
    } else if (size === "large" && color === "cool") {
      alert("Elephant");
    } else {
      alert("Please finish the quiz!")
    }


    event.preventDefault();
  });
});
