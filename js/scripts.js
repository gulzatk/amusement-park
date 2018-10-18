  $(document).ready(function() {
  var height = parseInt(prompt("What is your height in inches?"));

  if (height <= 24) {
    $('#teacup').show();
    $("#teacup2").addClass("highlight");

  } else if (60 > height > 24) {
    $("#bumpercars").show();
    $("#teacup").show();
    $("#bumpercars2").addClass("highlight");
    $("#teacup2").addClass("highlight");

  } else {
    $("#rollercoaster").show();
    $("#bumpercars").show();
    $("#rollercoaster2").addClass("highlight");
    $("#bumpercars2").addClass("highlight");
  }
});
