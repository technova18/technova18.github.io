function getusername()
            {
                var username= parseInt(sessionStorage.getItem("appid"));
                return username;
            }
            uid = getusername();
            flag=0;
            //pswd = pswd.substring(1,4) + "-" + pswd.substring(5,6);
            //alert(pswd);
            document.title = "PUBG Registration ID: " + uid;
	    //cnt = 0;
            //$("#clsdtls").html("Application ID : " + uid + "<br>");
			
  // Initialize Firebase
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
var sname = snap.child("sname").val();
var tname = snap.child("tname").val();
var ffname  = snap.child("ffname").val();

var appid = snap.child("appid").val();

var updsign = snap.child("updsign").val();
var approve = snap.child("approve").val();


if(appid==uid)
{
flag=1;
$('#nappid').html("<h1> SQUAD ID: " + appid + "</h1>");

$('#nfname').html("<b>" + fname + "</b>");


$('#nsname').html("<b>" + sname + "</b>");



$('#ntname').html("<b>" + tname + "</b>");



$('#nffname').html("<b>" + ffname + "</b>");


if(approve!="NO")
$('#napprove').html("Payment has Confirmed");
else
$('#napprove').html("Payment confirmation is Pending");

$("#nupdsign").attr("src",updsign);

}
});
});
