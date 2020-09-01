$(document).ready(function() {

//Rover Select 
var curiosity = document.querySelector("#curiosity");
var opportunity =  document.querySelector("#opportunity");
var spirit = document.querySelector("#spirit");
//Camera Select 
var cameraSelectEl = document.querySelector("#cameraSelect");
var fhaz = document.querySelector("#fhaz");
var rhaz = document.querySelector("#rhaz");
var navcam = document.querySelector("#navcam");
//Button Select 
var submitBtn = document.querySelector("#submitBtn");
var clearBtn = document.querySelector("#clearBtn");
//Validation (must choose only 1 camera, must choose only 1 camera)

// array to store user-checked rovers
var rovers = [];

var key = "l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc";

  function getInput() {
      // get rover id and assign it to name.  pass it to getLastDate
      // camera equals user input for #cameraSelect.  Pass camera to getLastDate
      //getLastDate(rover, camera);

    if (curiosity.checked == false && opportunity.checked == false && spirit.checked == false) {
      alert("Please choose a rover!");
    }
    if (curiosity.checked == true) {
      var curiosityRover = {
      "name": "Curiosity",
      "camera": "", 
      "maxDate": ""};
      rovers.push(curiosityRover);
    }
    if (opportunity.checked == true) {
      var opportunityRover = {
        "name": "Opportunity",
        "camera": "", 
        "maxDate": ""};
      rovers.push(opportunityRover);
    }
    if (spirit.checked == true) {
      var spiritRover = {
        "name": "Spirit",
        "camera": "", 
        "maxDate": ""};
      rovers.push(spiritRover);
    }
    getLastDate(rover);
    }
  
  function getLastDate(rover) {
  
    var querySelector = "https://api.nasa.gov/mars-photos/api/v1/manifests/" + name + "?" + "&api_key=" + key;

      $.ajax({
        url: querySelector,
        method: "GET"
      }).then (function(response) {
      
      // creates generic rover object to store user values into
      rover = {
        "name": "",
        "camera": "",
        "maxDate": "" 
      };


      // if statements to determine the correct maxDate for user camera
      // if (rover = curiosity) {
      //   rover.maxDate = response.photo_manifest.max_date;
      // }
      // else if (rover = opportinity || camera = navcam) {
      //   rover.maxDate = "2018-05-16";
      // }
      // else if (rover = opportunity || camera = fhaz) {
      //   rover.maxDate = "2018-06-04";
      // }
      // else if (rover = opportunity || camera = rhaz) {
      //   rover.maxDate = "2018-05-17";
      // }
      // else if (rover = spirit || camera = navcam) {
      //   rover.maxDate = "2010-02-26";
      // }
      // else if (rover = spirit || camera = fhaz) {
      //   rover.maxDate = "2010-02-14";
      // }
      // else {
      //   rover.maxDate = "2010-02-09"
      // }

      rover.camera = camera;
      rover.name = name;

      // pass rover object to displayPicture function
      displayPicture(rover);
    });   
  }



  function displayPicture(rover) {
  
    var querySelector = "https://api.nasa.gov/mars-photos/api/v1/rovers/" + rover.name + "/photos?earth_date=" + rover.maxDate + "&camera=" + rover.camera + "&api_key=" + key;

      $.ajax({
        url: querySelector,
        method: "GET"
      }).then (function(response) {
        //here's where we'll get the latest image from the given rover and camera
        console.log(response.photos[0].img_src);

      });
    }

    // submit button runs getInput function
    $("#submitBtn").click(function() {
      event.preventDefault();
      getInput();
    });



  console.log( "Getting Weather for Mars!" );
  getForecast();



let marsWeather = [];
  
 function getForecast() {
    //Link to the Nasa API
    var NasaQueryURL = "https://api.nasa.gov/insight_weather/?api_key=l7taWHMaSee1eSh38lm8sF83paMJIJ9KJQ1ehkuc&feedtype=json&ver=1.0"
  
    //Call the Ajax to get the weather data
    $.ajax({
      url: NasaQueryURL,
      method: "GET"
    }).then(function(response) {
      console.log(response);
    })
    .catch((error) => {
        console.log(error)
    });
 }

});
