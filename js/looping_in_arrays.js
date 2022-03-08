// let langauges = ['HTML', 'CSS', 'JavaScript'];
// langauges.forEach(function(language) {
//     alert('I love ' + language + '!');
// });

// let total = 0;
// let summands = [1, 2, 3, 4, 5];
// summands.forEach(function(summand){
//     total += summand;
// });
// alert(total); //15

// let friends = ['Tuwei', 'Mwazo', 'Suleiman', 'Rhinolamwer'];
// friends.forEach(function(friend) {
//     alert('Bonjour ' + friend + '!');
// });

// Array : Mapping
//Double numbers in an array using forEach()
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = [];
// numbers.forEach(function(number) {
//     doubledNumbers.push(number * 2);
// });
// alert(doubledNumbers);

//Double numbers in an array using .map()
// let numbers = [1, 2, 3, 4, 5];
// let doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });
// alert(doubledNumbers);

//Looping with "For"
// for (let index = 1; index <= 3; index += 1) {
//     alert(index);
// }

// let languages = ['HTML', 'CSS', 'JavaScript'];
// for (let index = 0; index < languages.length; index += 1) {
//     alert('I love ' + languages[index] + '!');
// }


// let total = 0;
// let summands = [1, 2, 3, 4, 5];
// for (let index = 0; index < summands.length; index += 1) {
//     total += summands[index];
// }
// alert(total); //15

//for loop
let total = 0;
for (let currentNumber = 1; currentNumber <= 5; currentNumber += 1) {
    total += currentNumber;
}
alert("Total is: " + total);