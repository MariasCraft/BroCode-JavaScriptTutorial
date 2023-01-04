// --- THIS IS THE BEGINNING OF JAVASCRIPT
// console.log ('I like rex');
// console.log ('I will be a Software Engineer');

// window.alert ("I WILL BE A SOFTWARE ENGINEER")



// --- VARIABLES
          // Variable is a container for storing data
          // Variable behaves as of it was the value that it contains

          // Two steps :
          // 1. Declaration (var,let,const)
          // 2. Assignment (= assignment operator)

          // Data types : string, number, boolean

          /*
          let age = 21;
          let firstName = 'Maria';
          let student = true;
          // age = 21;

          console.log (age);
          console.log (firstName);
          console.log (student);

          document.getElementById("p1").innerHTML = "Hello " + firstName;
          document.getElementById("p2").innerHTML = "You are " + age + " years old.";
          document.getElementById("p3").innerHTML = "Enrolled: " + student;
          */

                              // Arithmetic expression is a combination of. . . 
                              /* operands (values, variables, etc.)
                                  operators (+ - * / %)
                                  that can be evaluated to a value
                                  example: y=x+5 (like algebra) */

           /*  let student = 20;

          // student = student +1;
          // student = student - 1;
          // student = student * 2;
          // student = student / 2;
          // (modulus % -- will show the remainder what was divided by)
           /* let extraStudents = student % 3;  //---> 20/3 = 6.667 (3*6=18), so 20-18=2 (2 is the answer of the modulus) */

           /* other ways of writing code above : 
                    students += 1;
                    studetns -= 1;
                    students *= 2;
                    students /= 2; */

          /* console.log (extraStudents) */

          //---------------------------------------------------------------------------------
          // --- USER INPUT
                              // how to accept user input, EASY WAY with window prompt

          // let username = window.prompt("What is your name? ");

          // console.log (username);

                              // DIFFICULT WAY but practical

       
          
          // username = document.getElementById("myButton").onclick = function(){

          //           username = document.getElementById("myText").value;
                    // console.log(username);
                    // document.getElementById("myLabel").innerHTML;

          //---------------------------------------------------------------------------------

          //--- TYPE CONVERSION = change the datatype of a value to another (strings, numbers, booleans)

          // let age = window.prompt ("How old are you?");

          // // age += 1; // this is a string - to change it to a number, see syntax below

          // age = Number(age);

          // age += 1;

          // console.log("Happy Birthday! You are", age, "years old");
          
          //-- another example : 

          // let x;
          // let y;
          // let z;

          // x= Number("3.14");
          // y= String(3.14);
          // z= Boolean(""); -- if boolean is empty it will give a false result, if you write something, you will get a true result

          // console.log(x, typeof x)
          // console.log(y, typeof y)
          // console.log(z, typeof z)  
          
          //---------------------------------------------------------------------------------

          // CONST - a variable that can't be changed
            //example :

            // const PI = 3.14159;   //let change to const since the pi in math cannot be changed just like const.
            // let radius ;
            // let circumference;

            // radius = window.prompt ("Enter the radius of a circle");
            // radius = Number(radius);

            // circumference = 2 * PI * radius;

            // console.log ("The circumference is: ", circumference)


            // ---- MATH

                // let x = 3.14;

                /* x = Math.round(x); round the number to 3
                    x = Math.floor(x); always round the number down ; result : 3
                    x = Math.ceil(x); always round up; result : 4
                    x = Math.pow(x, 2); x to the power of 2;
                    x = Math.sqrt(x);
                    x=Math.abs(x); absolute value is the distance away from zero.; result will be positive

                    console.log (x);   */

                // another sample:

                // let x = 3.14
                // let y = 5
                // let z = 9
                // let maximum;
                // let minimum;

                // maximum = Math.max(x,y,z);
                
                // console.log(minimum) ; result would be the minumum number which is the 3.14

    // --- FIND THE RIGHT ANGLE TRIANGLE - HYPOTENUSE

        // let a;
        // let b;
        // let c;

        // a = window.prompt ("Enter side A")
        // a = Number(a);

        // b = window.prompt ("Enter side B")
        // b = Number(a);

        // c = Math.sqrt (Math.pow (a, 2) + Math.pow (b, 2));

        // console.log ("Side C:", c);

        // HYPOTENUSE IN HTML

        // document.getElementById ("submitButton").onclick = function () {

        //     a = document.getElementById("aText").value; 
        //     a = Number(a);

        //     b = document.getElementById("bText").value; 

        //     c = Math.sqrt (Math.pow (a, 2) + Math.pow (b, 2));

        //    document.getElementById("cLabel").innerHTML = "side c: " + c;

        // }


        // --- COUNTER PROGRAM

       /* let count=0

        document.getElementById("decreaseBtn").onclick = function () {
                count -= 1;
                document.getElementById ("countLabel").innerHTML = count;
        }

        document.getElementById("resetBtn").onclick = function () {
            count  = 0;
                document.getElementById ("countLabel").innerHTML = count;
        }

        document.getElementById("increaseBtn").onclick = function () {
            count  += 1;
                document.getElementById ("countLabel").innerHTML = count;
        }

        */

        //--- RANDOM NUMBER (this is optional but useful for creating games or dice)

        // let x = Math.random();                                   //random number between 0 and .999999
        // let x = Math.random() * 6;                           // to generate number between 0 and 5
        // let x = Math.floor(Math.random() * 6) + 1;   //to generate number between 1 and 6, so add 6 in syntax, this works like a dice

                // to roll 3 dice
             
         /*    let x 
                let y
                let z

        document.getElementById('rollBtn').onclick = function () {

            x = Math.floor(Math.random() * 6) + 1;
            y= Math.floor(Math.random() * 6) + 1;
            z = Math.floor(Math.random() * 6) + 1;

            document.getElementById("xLabel").innerHTML = x;
            document.getElementById("yLabel").innerHTML = y;
            document.getElementById("zLabel").innerHTML = z;
            }

            */

            // --- STRING SLICING

            // let fullName = "Maria Baclayon"
            // let firstName;
            // let lastName;

            // lastName = fullName.slice(6);
            // firstName = fullName.slice(0, 5);


// --- IF STATEMENT 
        // - a basic form of decision making if a condition is true, then do something if not, then don't do it.

        // let age = 2;


        // if (age >= 18) {
        //             console.log ("You are an adult!");
        // }
        // else {
        //     console.log("You are a child!")
        // }

        // let age = 20;

        //  if (age >=60) {
        //     console.log ("You are a senior");
        // }

        // else if (age >= 18) {
        //     console.log ("You are an adult");
        // }

        // else if (age < 0) {
        //     console.log ("You are not born yet");
        // }
      
        // else {
        //     console.log ("Please input a correct number, Thank you!"); }
    

        //NOTE : the order of the else if statement does matter

