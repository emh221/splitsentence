$(document).ready(function() {
  $("form#split").submit(function() {
    var sentence = $("input#sentence").val();

    var words = sentence.split(" ");

    var longWords = words.filter(word => word.length > 2)

    var reversedLongWords = longWords.reverse();

    var stringReversedLongWords = reversedLongWords.join(' ');

    console.log(stringReversedLongWords);

    $("#output").text(stringReversedLongWords);

    $("#response").show();

    event.preventDefault();
  });
});
