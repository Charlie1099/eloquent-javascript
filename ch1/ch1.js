// Chapter 1 take aways //

// All data is stored as long sequences of bits and is thus fundamentally alike //

// Any piece of discrete information can be reduced to ones and zeros and is represented in bits //

/* In order to maange the vast number of bits and not get lost in the memory/storage device we sperate them
 in to chunks that will represnt the info. JavaScript use whats called values when you create a value you will cuse the memory 
 in your computer to fire up*/

 // Values/basic data types in javaScript  //
 /* 1. Numbers  
    2. Strings
    3. Unary Operators
    4. Boolean
   
        You create a value with strings three ways
         1. '' single quotes
         2. "" double quotes
         3. `` backticks 
         as long as the value that you create ends with the same method that you started the string with.
         Strings in javaScript are stil stored in the memory as bits javaScript will convert the string value
         using the Unicode standard. This will do it virtually for every character.

        you can add to strings to geather by the plus sign like so*/
        "con"+"cat"+"e"+"nate" // this is called concatenate //

        /* Both single and duble quotes behave the same.
            Backticks are however diffrent in that you can have embeded values puting them inside this ${} */

        /*
        3. Unary Operators
            You will find that not all unary operators are symbols the typeof operator will give you the type of data type somthing is 
            */ console.log(typeof 4.5) // will give you a data type of number//
                console.log(typeof "s") // will give you a data type of string
        
        /** 
         4. Boolean Values
             With boolen values they can be used to conpaire or distinguish values for example
            
             Comparison is one way to use boolean */
            console.log(3 > 2) // this will show true but if you 
            console.log(3 < 2) // you will get false
        /*  Also you can use 
            != (not equal to)
            == (equal to)
        /*
                Logical Operators
                These will have three operators andd, or, and not.
                    1. && and this operator will only show true if both values that it is comparing are the same if not then it will show 
                              false.
                    2. || or this operator will show true if one of the operators that it is comparing are true if both are not then 
                             it will show false.
                    3. !  not The not operator flips the value of the operator meaning !true will be turned into false and !false will
                               be true. 
                    4. ?: conditional operator this one can be uesed to replace the if else statment a good explination can be found at
                                https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator        

         Empty values
            1. undefined
            2. null
            these are to denot the absense of value

        Automatic Type Convesions 
            When a operator is applied to the wong value type javaScript will try to convert the data type to the same 
            value if theres a NaN with these it can be due to this type of conversion.

            Short-circuiting of Logical Operators
                When the && and || handle values of diffrent types the will convert the value to the left to a boolen to see what to do
                
                */             