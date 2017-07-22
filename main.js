(function(){

$(document).ready(initialize);

  var config = {
    apiKey: "AIzaSyA_ZtrAUcTW1dudi46hcepomhUFVclYu30",
    authDomain: "eatlocal-35b5c.firebaseapp.com",
    databaseURL: "https://eatlocal-35b5c.firebaseio.com",
    projectId: "eatlocal-35b5c",
    storageBucket: "eatlocal-35b5c.appspot.com",
    messagingSenderId: "293074508247"
  };

function initialize(){
  firebase.initializeApp(config);
}

})();
