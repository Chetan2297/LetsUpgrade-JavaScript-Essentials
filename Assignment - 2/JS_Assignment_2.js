//JAVASCRIPT ESSENTIAL ZERO TO HERO (JULY 2021)

// ASSIGNMENT 2

// SUBMITTED BY - CHETAN BHOYAR

//ASSIGNMENT QUESTION 1 -  FIZZBUZZ PROBLEM

// SOLUTION -

n1 = 0; 
n2 = 0; 
for(i = 1; i<=100; i++){
    s = "";
    n1++;
    n2++;
    if(n1==3){
        s = s+"Fizz";
        n1 = 0;
    }
    if(n2==5){
        s = s+"Buzz";
        n2 = 0;
    }
    if(s == ""){
        console.log(i);
    }
    else{
        console.log(s);
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------


// ASSIGNMENT QUESTION 2 -  FIND PALINDROME WORDS IN A GIVEN STRING.

// SOLUTION -

s = "Madam is talking with her dad and mom";
s = s+ " ";
word = "";
revword = "";
for(k of s){
    if(k != " "){
        word = word + k;
        revword = k + revword;
    }
    else{
        if(word == revword){
            console.log(word)
        }
        word = ""
        revword = ""
    }
}

// ---------------------------------------------------------------------------------------------------------------------------------


