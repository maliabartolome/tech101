// CODE IS DOES NOT FUNCTION - This code was created only to test out the modal.

$(document).ready(function() {
$("#blanks form").submit(function(event) {
  var formIds = ["#name", "#skill", "#career", "#career-change", "#words", "#stress-level", "#path-walk"];

  formIds.forEach(function() {
    var name = $("#name").val();
    var skill = parseInt($("#skill").val());
    var career = parseInt($("#career").val());
    console.log(career)
    var careerChange = parseInt($("#career-change").val());
    var words = parseInt($("#words").val());
    var stressLevel = parseInt($("#stress-level").val());
    var pathWalk = parseInt($("#path-walk").val());

    var results = skill + career + careerChange + stressLevel + pathWalk ;
    if (results >= 0 && results <= 12) {
        $('#result-product').show();
        $('#result-engineer, #result-security').hide();
      } else if (results >= 12 && results <= 25) {
        $('#result-engineer').show();
        $('#result-product, #result-security').hide();
      } else if (results >= 26) {
        $('#result-security').show();
        $('#result-engineer, #result-product').hide();
      } else {
        $('#result-security').show();
        $('#result-engineer, #result-product').hide();
      }

      $(".text").text(name);
    });
    event.preventDefault();
  });
});
