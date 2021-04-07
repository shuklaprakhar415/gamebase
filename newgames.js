var firebaseConfig = {
    apiKey: "AIzaSyBADjFd_E4B3nWoMJVPdnUFZZ7jAx7_3kw",
    authDomain: "gamebase-d47ce.firebaseapp.com",
    databaseURL: "https://gamebase-d47ce-default-rtdb.firebaseio.com",
    projectId: "gamebase-d47ce",
    storageBucket: "gamebase-d47ce.appspot.com",
    messagingSenderId: "985475696749",
    appId: "1:985475696749:web:ef6e2ebbba2c4314229764"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
                                                  
  var reference = firebase.database().ref('Collected Data');
  reference.on('value', function(snapshot)
   {
  snapshot.forEach(function(userSnapshot)
  {
  console.log(userSnapshot.val().game_url)
  document.getElementById("game_url").href = userSnapshot.val().game_url;
  
  document.getElementById("img_src").src = userSnapshot.val().game_img_src;
  //document.getElementsById('gamename').innerHTML = userSnapshot.val().game_name;
 
  
  
  
  });
});
