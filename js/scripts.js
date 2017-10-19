$(document).ready(function() {
  $("form#animal-quiz").submit(function(event) {
    var color = $("select#color").val();
    var size = $("select#size").val();

    if (size === "small" && color === "hot") {
      alert("small/hot");
    } else if (size === "small" && color === "cool") {
      alert("small/cool");
    } else if (size === "large" && color === "hot") {
      alert("large/hot");
    } else if (size === "large" && color === "cool") {
      alert("large/cool");
    } else {
      alert("Please finish the quiz!")
    }


    event.preventDefault();
  });
});
