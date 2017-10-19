$(document).ready(function() {
  $("form#animal-quiz").submit(function(event) {
    var color = $("select#color").val();
    var size = $("select#size").val();

    if (size === "small" && color === "hot") {
      $("#lion, #blue-jay, #elephant").hide();
      $("#chinchilla").show();
    } else if (size === "small" && color === "cool") {
      $("#lion, #chinchilla, #elephant").hide();
      $("#blue-jay").show();
    } else if (size === "large" && color === "hot") {
      $("#chinchilla, #blue-jay, #elephant").hide();
      $("#lion").show();
    } else if (size === "large" && color === "cool") {
      $("#lion, #blue-jay, #chinchilla").hide();
      $("#elephant").show();
    } else {
      alert("Please finish the quiz!")
    }


    event.preventDefault();
  });
});
