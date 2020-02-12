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
            $("#clsdtls").html("Details of <b>Intra College </b>Students Registered<br>");

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

var rootRef = firebase.database().ref('users');

rootRef.on("child_added", snap => {

var fname = snap.child("fname").val();
var sname = snap.child("sname").val();
var fmail = snap.child("fmail").val();
var smail  = snap.child("smail").val();
var fphone = snap.child("fphone").val();
var sphone = snap.child("sphone").val();
var fstrm = snap.child("fstrm").val();
var sstrm = snap.child("sstrm").val();
var fyr = snap.child("fyr").val();
var syr = snap.child("syr").val();
var fclg = snap.child("fclg").val();
var sclg = snap.child("sclg").val();
var fdept = snap.child("fdept").val();
var sdept = snap.child("sdept").val();
var fevent = snap.child("fevent").val();
var sevent = snap.child("sevent").val();
var mindbend = snap.child("mindbend").val();
var tfevent = snap.child("tfevent").val();
var tsevent = snap.child("tsevent").val();
var appid = snap.child("appid").val();
var prtype = snap.child("prtype").val();

if(prtype=="Intra")
{
$("#table_body").append("<tr><td>" + appid + "</td><td>" + fname + "</td><td>" + sname + "</td><td>" + fmail + "</td><td>" + smail + "</td><td>" + fphone + "</td><td>" + sphone + "</td><td>" + fstrm + "</td><td>" + sstrm + "</td><td>" + fyr + "</td><td>" + syr + "</td><td>" + fclg + "</td><td>" + sclg + "</td><td>" + fdept + "</td><td>" + sdept + "</td><td>" + fevent + "</td><td>" + sevent + "</td><td>" + mindbend + "</td><td>" + tfevent + "</td><td>" + tsevent + "</td></tr>");
}

});

});


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students Registered = " + rowCount +"");
}
