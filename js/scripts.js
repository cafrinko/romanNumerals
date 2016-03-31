$(document).ready(function() {

  $("form").submit(function(event) {
    event.preventDefault();

    var human_number = $("#in_number").val();
    $("#outputList").text(toRome(human_number));

  });


  function toRome(num){

    num = num.split("").reverse();
    num = [3,9,5]

    base1 = ["","I","II","III","IV","V","VI","VII","VIII","IX"];

    base10 = ["", "X", "XX", "XXX", "XXL", "L", "LX", "LXX", "LXXX", "XC"];

    base100 = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];

    base1000 =["", "M", "MM", "MMM", "MV"];


    result = [];
// for each digit of the inputted number
    for (i=0; i <= num.length; i++){
      // if at the first digit
      if (i===0){
        // enter a roman numeral of the index in base1 that corresponds to the
        result.push(base1[ num[i] ])
        // base1[num[i]] == the value in base1, at index number num[i]. num[i] being whichever value in the split integer
      }
      else if (i===1){
        result.push(base10[num[i]])
      }
      else if (i===2){
        result.push(base100[num[i]])
      }
      else if (i===3){
        result.push(base1000[num[i]])
      }
    }

    console.log(result.reverse().join(""))


  };

});
