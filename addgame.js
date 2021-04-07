
var firebaseConfig = {
    apiKey: "AIzaSyBADjFd_E4B3nWoMJVPdnUFZZ7jAx7_3kw",
    authDomain: "gamebase-d47ce.firebaseapp.com",
    projectId: "gamebase-d47ce",
    storageBucket: "gamebase-d47ce.appspot.com",
    messagingSenderId: "985475696749",
    appId: "1:985475696749:web:ef6e2ebbba2c4314229764"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref('Collected Data');


document.getElementById('contactForm').addEventListener('submit', submitForm);

function submitForm(e) {
e.preventDefault();

// Get values
//var name = getInputVal('name');
//var email = getInputVal('email');
var game_name = getInputVal('game-name');
//var category = getInputVal('category');
var game_url = getInputVal('game-url');
var game_img_src = getInputVal('game-img-src');

//saveMessage(name, email , game_name,category,game_url,game_img_src);
saveMessage( game_name,game_url,game_img_src);







document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id) {
return document.getElementById(id).value;
}

// Save message to firebase
//function saveMessage(name, email, game_name,category,game_url,game_img_src) {
  function saveMessage( game_name,game_url,game_img_src) {
  var newMessageRef = messagesRef.push();
 


  newMessageRef.set({

    game_name: game_name,
  
    game_url : game_url,
   game_img_src :game_img_src,
});
}





var reference = firebase.database().ref('Collected Data');
reference.on('value', function(snapshot)
 {
snapshot.forEach(function(userSnapshot)
{
  var gameurl=userSnapshot.val().game_url;
  var imgsrc=userSnapshot.val().game_img_src;
  var gamename=userSnapshot.val().game_name;
console.log(userSnapshot.val().game_url)
document.getElementById("game_url").href = gameurl;

document.getElementById("img_src").src = imgsrc;





});
});