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
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});
alert(doubledNumbers);
