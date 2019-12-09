$(document).ready(function() {
  $("form#split").submit(function() {
    var sentence = $("input#sentence").val();

    var words = sentence.split(" ");

    var longWords = []

    words.forEach(function(word) {
      var length = word.length;
      if (length >= 3) {
        longWords.push(word);
      }
    });

    var reversedLongWords = longWords.reverse();

    var stringReversedLongWords = reversedLongWords.join(' ');

    console.log(stringReversedLongWords);

    $("#output").text(stringReversedLongWords);

    $("#response").show();

    event.preventDefault();
  });
});
