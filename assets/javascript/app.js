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
let database = firebase.database();

//initial values
//var tName = "";
//var tFrequency = 0;
//var dest = "";
//var trainTime = 0;

//click event handler function for submit button
$("#submit").on("click", function() {
    //event.preventDefault();
    //logic for storing and retrieving train information

        //train name
        //var tName = jquery train name text input

        //Frequency variable
        //var tFrequency = jquery frequency text input      

        //destination variable
        //var dest = jquery destingation text input     

        //Train Time variable
        //var trainTime = jquery first train time text input 
        
    //set variables from initial train input to database   
        //dataRef.ref().push({
            //trainName = tname,
            //frequency = tFrequency,
            //destination = dest,
            //firstTrain = trainTime
        //});
//});

//Firebase watcher .on("child_added")
//database.ref().on("child_added", function(snapshot) {
    //store snapshot in variable
    //var sv = snapshot.val();

    //current time variable
    //var currentTime = moment();

    //create function to convert train information
    //function trainCalc() {       
        
        //+++++++++ train time calculations +++++++++++//

        //difference between times
        //var diffTime = moment().diff(currentTime, "minutes");
        //console.log("difference in time: " + diffTime);       

        //Time apart (remainder)
        //var tRemainder = diffTime % tFrequency;       

        //Minute until Train
        //var tMinutesTillTrain = tFrequency - tRemainder;
        //console.log("minutes till train: " + tMinutesTillTrain)       

        //Next Train
        //var nextTrain = moment().add(tMinutesTillTrain, "minutes");
        //console.log("arrival time: " + moment(nextTrain).format("hh:mm"));
    //}

//change html to reflect 
    //jquery table row.text(sv.trainName);
    //jquery table row.text(sv.tFrequency)
    //jquery table row.text(sv.dest);
    //jquery table row.text(sv.nextTrain);
    
//}, function(errorObject) {
    //console.log("errors handled: " + errorObject.code);
//});

    
    


     



    