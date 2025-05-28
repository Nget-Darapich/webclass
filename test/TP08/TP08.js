//ex1 Robot Greeter
// function greetingRobot(name, color) {
//     alert("Hello " + name + "," + "I see you like " + color + ". I'm a robot, but I like that color too!")
// }
// let name = prompt("Enter your name: ");
// let color = prompt("Enter your favorite color: ");
// greetingRobot(name, color);


//ex2 Secret Code Name Generator
// const generateCodeName = function(name){
//     console.log("Agent " + name.toUpperCase())
// }
// generateCodeName("sophea");


//ex3 Grade Evaluator
// const getGrade = (score) =>{
//     if(score>=90){
//         console.log("A");
//     }
//     else if(score>=80 && score<90){
//         console.log("B");
//     }
//     else if(score>=70 && score<80){
//         console.log("C");
//     }
//     else if(score>=60 && score<70){
//         console.log("D");
//     }
//     else if(score<60){
//         console.log("F");
//     }
// }
// getGrade(95); // "A"
// getGrade(82); // "B"
// getGrade(68); // "D"
// getGrade(45); // "F"


//ex4 Spell Out Your Name
// function spellOutName(name) {
//     for (i = 0; i < name.length; i++) {
//         console.log(name[i]);
//     }
// }
// spellOutName("Anna");


//ex5 Music Playlist Manager
// function addSong(playlist, song) {
//     playlist.push(song);
//     console.log('["' + playlist.join('", "') + '"]');
// }
// addSong(["Shape of You", "Blinding Lights"], "Bad Guy");

//ex6 Alien Translator
// const toAlienLanguage = (sentence) => {
//     if (/[ieaou]/i.test(sentence)) {
//         let alienSentence = sentence.replace(/[ieaou]/g, '*');
//         console.log(alienSentence);
//     }
// }
// toAlienLanguage("hello world");
// toAlienLanguage("javascript is fun");


//7 Password Strength Checker
// const checkPassword = function(password) {
//     const hasNumber = /\d/;
//     const hasSpecial = /[!@#]/;
//     if (
//         password.length >= 8 &&
//         hasNumber.test(password) &&
//         hasSpecial.test(password)
//     ) {
//         console.log("Your password is Strong");
//     } else {
//         console.log("Your password is Weak");
//     }
// };
// checkPassword("hello123");
// checkPassword("Hello@123");
// checkPassword("short1!");
