//Looping a triangle
let number = 0
let result = ""
while(number < 7) {
    console.log(result)
    number = number + 1
  result += "#"
};

for(let hash = "#"; hash.length <= 7; hash += "#") {
    console.log(hash)
}
//did it in a wile before a for loop but both of these are the same it is diffrent than the sulition at https://eloquentjavascript.net/code/#2.1
/*
both shoould show
#
##
###
####
#####
######
#######
*/

// Fizz Buzz
for(number = 1; number <= 100; number++) {
    let line = ""
    if(number % 3 === 0){
        line += "Fizz";
    } else if (number % 5 === 0) {
        line += "Bizz"
    }
    console.log(line || number)
}
// you could just do two if statments insted of the else if and one line them

//Chessboard
let size = 8
let board = ""

for(y = 0; y < size; y++) {
    // the outer loop will complet onence but the inner will runn 8 times 
    // inner hadels what is printed on the line
    for(x = 0; x < size; x++) {
        if((x + y) % 2 === 0) {
            board += " "
        } else {
            board += "#"
        }
        
    }
    // this will cuase the pattern that we need by useing an escape
    board += "\n"
    // console.log(board) 
    
    
}
console.log(board)

/* what it looks like
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/