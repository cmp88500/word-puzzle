//CODE EXAMPLE FROM OTHER GROUP:

// $(function () {
//   return stringToSplit.split("");
// }
//
// $("#form1").submit(function(evt))
//
// newArray.forEach(function(letter, index) {
//   console.log(letter);
//   var vowels = ['a', 'e', 'i', 'o', 'u'];
//   vowels.forEach(function(vowel) {
//     if ( letter === vowel) {
//       newArray[index] = "-"
//     }
//   });
//   ("#output").text(newArray.join(""));
// }


$(document).ready(function() {
  $("#numbers").submit(function(event) {
    event.preventDefault();
    var string = $("#input").val();
    var letters = string.split("");

    var puzzle = []
    console.log(letters);
    letters.forEach(function(letter, index) {
      if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
        letters[index] = "-";
      } else {
        letters[index] = letter;
      }
    });
    console.log(letters);
    $("#answer").text(letters.join(""));
  });
});
