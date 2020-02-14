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
            $("#clsdtls").html("Details of Students Registered for <b>PUBG </b><br>");

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

var rootRef = firebase.database().ref('pubg');

rootRef.on("child_added", snap => {

var fname = snap.child("fname").val();
var fmail = snap.child("fmail").val();
var fphone = snap.child("fphone").val();
var sphone = snap.child("sphone").val();
var sname = snap.child("sname").val();
var tname = snap.child("tname").val();
var ffname = snap.child("ffname").val();
var updsign = snap.child("updsign").val();
var fevent = snap.child("fevent").val();
var approve = snap.child("approve").val();
var appid = snap.child("appid").val();



$("#table_body").append("<tr><td>" + appid + "</td><td>" + fname + "</td><td>" + sname + "</td><td>" + tname + "</td><td>" + ffname + "</td><td>" + fmail + "</td><td>" + fphone + "</td><td>" + sphone + "</td><td>" + fevent + "</td><td>" + approve + "</td><td><img src=\"" + updsign + "\" height=550 width=300></img></td></tr>");

});

});


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students Registered = " + rowCount +"");
}
