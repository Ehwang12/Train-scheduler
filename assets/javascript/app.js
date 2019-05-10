//firebase data config
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB2BgHgkpSc8-x12IzZz8hKiZl08dFRN8k",
    authDomain: "train-scheduler-aad7d.firebaseapp.com",
    databaseURL: "https://train-scheduler-aad7d.firebaseio.com",
    projectId: "train-scheduler-aad7d",
    storageBucket: "train-scheduler-aad7d.appspot.com",
    messagingSenderId: "2666179812",
    appId: "1:2666179812:web:267bade441004fff"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


//database variable
var database = firebase.database();

//initial values
var tName = "";
var tFrequency = 0;
var dest = "";
var trainTime = "";

//click event handler function for submit button
$(document).on("click", "#submit", function(event) {
    event.preventDefault();
    //logic for storing and retrieving train information

        //train name
        tName = $("#trainName").val().trim();
        console.log(tName);

        //Frequency variable
        tFrequency = $("#frequency").val().trim(); 
        console.log(tFrequency);     

        //destination variable
        dest = $("#destination").val().trim();
        console.log(dest);     

        //Train Time variable
        trainTime = $("#first-train-time").val().trim();
        console.log(trainTime); 
        
    //set variables from initial train input to database   
        database.ref().push({
            trainName: tName,
            frequency: tFrequency,
            destination: dest,
            firstTrain: trainTime
        });
});

//Firebase watcher .on("child_added")
database.ref().on("child_added", function(childSnapshot) {
    //store snapshot in variable
    let firstTrain = childSnapshot.val().firstTrain;
    let frequency = parseInt(parseInt(childSnapshot.val().frequency));
    
    console.log(childSnapshot.val().trainName);
    console.log(parseInt(childSnapshot.val().frequency));
    console.log(childSnapshot.val().destination);
    console.log(childSnapshot.val().firstTrain);

    //create function to convert train information
    function trainCalc() {       
        
    //+++++++++ train time calculations +++++++++++//

    // First Time (pushed back 1 year to make sure it comes before current time)
    var firstTimeConverted = moment(firstTrain, "HH:mm").subtract(1, "years");
    console.log(firstTimeConverted);

    // Current Time
    var currentTime = moment();
    console.log("CURRENT TIME: " + currentTime.format("hh:mm"));

    // Difference between the times
    var diffTime = currentTime.diff(firstTimeConverted, "minutes");
    console.log("DIFFERENCE IN TIME: " + diffTime);

    // Time apart (remainder)
    var tRemainder = diffTime % frequency;
    console.log(tRemainder);

    // Minute Until Train
    var tMinutesTillTrain = frequency - tRemainder;
    console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

    // Next Train
    var nextTrain = currentTime.add(tMinutesTillTrain, "minutes");
    console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"));
    };
    trainCalc();

//change html to reflect 
    //create table row element
    // var newRow = $("<tr>");
    
    //create table data element
    // var newData = $("<td>");

    //variables for train output
    // .text(sv.trainName);
    // .text(parseInt(sv.tFrequency));
    // .text(sv.dest);
    // .text(sv.nextTrain);

    //append to table row
    // newRow.append(name, freq, destNew, trainArrival);

    //append to table body
    // $(".tbody").append(newRow);
    
    }, function(errorObject) {
        console.log("errors handled: " + errorObject.code);
});

    
    


     



