        // Write a JavaScript program which iterates the integers from 1 to 100. But for
        // multiples of three print "Fizz" instead of the number and for the multiples of five print
        // "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".

        for (j=1; j<=100;j++){
            if(j%3==0  && j%5==0){
            console.log("FizzBuzz")
            }
            else if(j%3 == 0){
                console.log("Fizz")
            }
            else if(j%5 == 0){
                console.log("buzz")
            }
            else{
                console.log(j)
            }

         }
        //  Write a JavaScript program to sum the multiples of 3 and 5 under 1000.
        var sum = 0;
        for (var x = 0; x < 1000; x++)
        {
        if (x % 3 === 0 || x % 5 === 0)
        {
        sum += x;
        }

       }
       console.log(sum);

// Write a JavaScript for loop that will iterate from 0 to 20. For each iteration, it will
// check if the current number is odd or even, and display a message to the screen.
// Sample Output :
    //  "0 is even"
    //  "1 is odd"
    //  "2 is even"

    function large_number(){
        for (var x=0; x<=20; x++) {
          if (x % 2 === 0) {
              console.log(x + " is even");   
          }
          else {
              console.log(x + " is odd");
          }
        }
      }
      large_number()

// Write a JavaScript conditional statement to find the largest of five numbers in the
// given array.
// Let num = [-2, 4,-5, 6,0]


function largest_numb(){
        var num = [-2, 4, -5, 6, 0];
        var largest= 0;
        for (var i=0; i<num.length;i++){
         if (num[i]>largest) {
             var largest=num[i];
          }
        }
       console.log(largest);

      }
      largest_numb()

// Using conditional statements, write a JavaScript program to find the largest of the
// following two numbers: 10 & 40


function large(){
        var x = 10
        var y = 40

        if(x<y){
          console.log("10 is greatest")
        }
        else{
          console.log("40 is greater")
        }
      }
      large()
// Write a JavaScript program to find leap years from 2000 to 2022 
function leap_year_checker(){
        for (var n = 2000; n<=2022;n++){
          if(n%4==0)
          console.log(n+"was a leap year between 2000 and 2022","\n")
        }
      }
      leap_year_checker()