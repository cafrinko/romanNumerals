$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var human_number = $("#in_number").val();
    $("#outputList").text(cryptoSquare(human_number));

  });




  function cryptoSquare(letters) {
    letters = letters.replace(/\W/g, "").split("");
    console.log(letters.length);

    var theSquare = [];
    var encryption = [];
    /// define rows and column number by total.sqrt
    maxRow = Math.floor(Math.sqrt(letters.length));
    // console.log(row)

    maxColomn = Math.ceil(Math.sqrt(letters.length));
    // console.log(colomn)

    // letters index # counter
    var i = 0

    //for each row
    for (var r = 0; r < maxRow; r++) {
      //push another row until we reach max rows
      theSquare.push([]);
      //for each column
      for (var c = 0; c < maxColomn; c++) {
        //push a letter from the letters array into each row
        theSquare[r].push(letters[i])
        i++
      }
    }
//  for every column
    for (var ce = 0; ce < maxColomn; ce++) {
      // push a space (between words, where each column is a word)
      encryption.push(" ");
      //for each row
      for (var re = 0; re < maxRow; re++) {
        //push each letter by column to array encryption
        encryption.push(theSquare[re][ce])

      }
    }

    console.log(encryption)
    console.log(theSquare)

    var string = theSquare.join("")
    console.log()
  }

  // put letters into a row until we meet the max row.

  // return string ordered by row.








  function toRome(num) {
    // input  == 593
    num = num.split("").reverse();
    // num == [3,9,5]

    base1 = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

    base10 = ["", "X", "XX", "XXX", "XXL", "L", "LX", "LXX", "LXXX", "XC"];

    base100 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

    base1000 = ["", "M", "MM", "MMM", "MV"];


    result = [];
    // for each digit of the inputted number
    for (i = 0; i <= num.length; i++) {
      // if at the first digit
      if (i === 0) {
        // enter a roman numeral of the index in base1 that corresponds to the
        result.push(base1[num[i]])
          // base1[num[i]] == the value in base1, at index number num[i]. num[i] being whichever value in the split integer
      } else if (i === 1) {
        result.push(base10[num[i]])
      } else if (i === 2) {
        result.push(base100[num[i]])
      } else if (i === 3) {
        result.push(base1000[num[i]])
      }
    }

    console.log(result.reverse().join(""))


  };

});
