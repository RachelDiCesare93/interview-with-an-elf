



name = prompt("What's your name?");
greeting = prompt(
  "Happy Holidays" + " " + name + " ," + " What would you like for Christmas?"
);
questionTwo = prompt("How would you like to give back this holiday season? ");
questionThree = prompt("Favorite Christmas Movie:");
questionFour = prompt("What are your favorite Christmas cookies?");
questionFive = prompt(" Do you really think the Grinch hated Christmas?");
questionSix = prompt(
  "So another reindeer was just born and we need a name , can you give us one?"
);
questionSeven = prompt(
  "If you woke up one day and you were in the North Pole, \n What job would you want as an elf?"
);
questionEight = prompt(
  "Santa would love to have you! \n What holiday activity do you like to do with family and friends?"
);
questionNine = prompt("It's the night before Christmas, what are you doing?");
questionTen = prompt("What snack will you leave for Santa?");
questionEleven = prompt(
  "You wake up on Christmas morning , stockings or presents first?"
);
questionTwelve = prompt(
  "You're gathered around the table with your loved ones, what are you serving?"
);
questionThirteen = prompt("Come up with a Elf name:");
alert("Merry Christmas! Here's your mad-lib!");

let title = `<h1>${name}'s Interview with ${questionThirteen}</h1>`

document.write(title);

let sentence =
  `<h3>${questionThirteen}: Hello! This is ${questionThirteen} the elf who do I have the jolliness to be speaking with today?</br>` +
  `${name}: ${name}` +
  "</br>" +
  `${questionThirteen}: Happy Holidays ${name} ! I see that you want a ${greeting} for Christmas, is that correct?</br>` +
  `${name}: Yes!</br>` +
  `${questionThirteen}: Great choice! Tell me ${name} , how do you give back to those in need this holiday season?</br>` +
  `${name}: I participate in ${questionTwo}!</br>` +
  `${questionThirteen}: Splendid, splendid , I hope you reward yourself by watching ${questionThree} and baking ${questionFour} cookies!</br>` +
  `${name}: It's my most favorite thing to do</br>` +
  `${questionThirteen}: So we asked if you thought the Grinch really hated Christmas and you said ${questionFive}, what an answer!</br>` +
  `${name}: Well he's quite a what who just knew what to do to become a who!, By the way I heard Cupid just had a baby reindeer!</br>` +
  `${questionThirteen} Yes! thank you so much for the name suggestion ${questionSix}, what an adorable new addition to the reindeer clan!</br>` +
  `${questionThirteen}: By the way, we looked over your application as an elf-${questionSeven}, have you read the code of honor?</br>` +
  `${name}: Well of course I know how important it is to you and Santa Claus!</br>` +
  `${questionThirteen}: Good , now given that we are in a pandemic will you be doing virtual ${questionEight}?</br>` +
  `${name}: We will be social distancing</br>` +
  `${questionThirteen}: Just be careful and have fun!</br>` +
  `${questionThirteen}: Now regarding Christmas Eve, keep up with your tradition and ${questionNine} plus prepare for Santa, you know he likes his ${questionTen}</br>` +
  `${name}: I am putting a baggie of extras together for him , he will be so happy!</br>` +
  `${questionThirteen}: Great I will be over tommorow after you open your ${questionEleven} , I can't wait to try your Christmas ${questionTwelve}!</br>` +
  `${name}: Thanks ${questionThirteen}!</br>` +
  `${questionThirteen}: Oh and by the way, you got the job! Merry Christmas ${name}!</h3></br>`;


document.write(sentence);
