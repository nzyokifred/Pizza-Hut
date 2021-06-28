$(document).ready(function() {
  $("#mc-embedded-subscribe").click(function() {
    var name = $("input#mce-FNAME").val();
    var email = $("input#mce-EMAIL").val();
    var message = $("input#mce-MMERGE6").val();
    if ($("input#mce-FNAME").val() && $("input#mce-EMAIL").val()){
      alert (name + ", your message has been received successfully. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!")
    }
  });
});