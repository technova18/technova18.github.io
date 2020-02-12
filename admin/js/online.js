function getParams(){
                var idx = document.URL.indexOf('?');
                var params = new Array();
                if (idx != -1) {
                    var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
                    for (var i=0; i<pairs.length; i++){
                        nameVal = pairs[i].split('=');
                        params[nameVal[0]] = nameVal[1];
                    }
                }
                return params;
            }
            params = getParams();
            strm = unescape(params["prtype"]);
            //ccode = unescape(params["ccode"]);
            
	    cnt = 0;
            $("#clsdtls").html("Details of Students Registered for <b>Onliune Events </b><br>");

var config = {
    apiKey: "AIzaSyAsDccief9XqSmm1HLOY3lysECG5SMHgXM",
    authDomain: "technovafcc2020.firebaseapp.com",
    databaseURL: "https://technovafcc2020.firebaseio.com",
    projectId: "technovafcc2020",
    storageBucket: "technovafcc2020.appspot.com",
    messagingSenderId: "528326556099",
    appId: "1:528326556099:web:873803e9dbd2fa7eff6576",
    measurementId: "G-36C3QDDBYG"
  };
  firebase.initializeApp(config);            



$(document).ready(function(){

var rootRef = firebase.database().ref('online');

rootRef.on("child_added", snap => {

var fname = snap.child("fname").val();
var fmail = snap.child("fmail").val();
var fphone = snap.child("fphone").val();
var fstrm = snap.child("fstrm").val();
var fyr = snap.child("fyr").val();
var fclg = snap.child("fclg").val();
var fdept = snap.child("fdept").val();
var fevent = snap.child("fevent").val();
var sevent = snap.child("sevent").val();
var tevent = snap.child("tevent").val();
var hevent = snap.child("hevent").val();
var ffevent = snap.child("ffevent").val();
var xevent = snap.child("xevent").val();
var nevent = snap.child("nevent").val();
var appid = snap.child("appid").val();



$("#table_body").append("<tr><td>" + appid + "</td><td>" + fname + "</td><td>" + fmail + "</td><td>" + fphone + "</td><td>" + fstrm + "</td><td>" + fyr + "</td><td>" + fclg + "</td><td>" + fdept + "</td><td>" + fevent + "</td><td>" + sevent + "</td><td>" + tevent + "</td><td>" + hevent + "</td><td>" + ffevent + "</td><td>" + xevent + "</td><td>" + nevent + "</td></tr>");

});

});


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students Registered = " + rowCount +"");
}
