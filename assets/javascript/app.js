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
var trainTime = 0;

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
database.ref().on("child_added", function(snapshot) {
    //store snapshot in variable
    var sv = snapshot.val();

    //current time variable
    var currentTime = moment();

    //create function to convert train information
    function trainCalc() {       
        //+++++++++ train time calculations +++++++++++//

        //difference between times
        var diffTime = moment().diff(currentTime, "minutes");
        console.log("difference in time: " + diffTime);       

        //Time apart (remainder)
        var tRemainder = diffTime % tFrequency;       

        //Minute until Train
        var tMinutesTillTrain = tFrequency - tRemainder;
        console.log("minutes till train: " + tMinutesTillTrain)       

        //Next Train
        var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        console.log("arrival time: " + moment(nextTrain).format("hh:mm"));
    };
    trainCalc();
//change html to reflect 
    //create table row element
    var newRow = $("<tr>");
    
    
    //variables for train output
    var name = $("#train-name-output").text(sv.trainName);
    var freq = $("#destination-output").text(parseInt(sv.tFrequency));
    var destNew = $("#frequency-output").text(sv.dest);
    var trainArrival = $("#arrival-output").text(sv.nextTrain);

    //append to table row
    newRow.append(name, freq, destNew, trainArrival);

    //append to table body
    $(".tbody").append(newRow);
    
    }, function(errorObject) {
        console.log("errors handled: " + errorObject.code);
});

    
    


     



