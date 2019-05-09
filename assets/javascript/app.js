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

//++++++++train information input++++++++++++//       

        //Frequency
        //var tFrequency = jquery frequency text input      

        //destination 
        //var dest = jquery destingation text input     

        //Train Time
        //var trainTime = jquery first train time text input        

        //current time
        //var currentTime = moment();       

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

//click event handler function for submit button
    //set database variables using .ref().set()
    //push variables from train calculation to database set variables
     

//database snapshot function to grab values from database
    //console.log values
    //grab variables from firebase
    //manipulate and display information from database onto DOM
    //error code function

    