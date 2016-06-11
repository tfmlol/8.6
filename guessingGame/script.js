var answer = document.getElementById("userInput");

for (var i = 0; i <=100; i++)
   if (i % 2 == 0) {
   console.log("your number is even");
   while ( i % 2 == 0){
      console.log(i);
   }
}else if (i % 2 !== 0) {
   console.log(i + " your number is odd");
}


else {
   console.log(i);
}
