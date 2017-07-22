(function(){




  $(document).ready(initialize);


    // Initialize Firebase
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
  $('select').material_select();
  $('#dropdown1').on('change',loadData);
// uplaod exist or save new data or both  //
// breakfast , brunch, lunch dinner, dessert//
}

// function loadData(){
//   console.log("hi");
// }
// array sql vs. no sql//
function loadData(){
console.log("hi");
$("#results").empty();
var mealtype = $("#dropdown1 option:selected").val();
firebase.database().ref("Restaurants").once("value", function(snapshot){
  var restaurants = snapshot.val();
  for(var r in restaurants){
    var name = r;
    var meal_type = restaurants[r].mealType;
    if(meal_type===mealtype){
      $("#results").append(name + '<br>');
      // $("#results").append(name + "<a href>", + ", ");
    }

  }
});

}

})();
