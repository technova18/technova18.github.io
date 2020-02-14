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
var fphone = snap.child("fphone").val();
var updsign = snap.child("updsign").val();
var approve = snap.child("approve").val();
var appid = snap.child("appid").val();



$("#table_body").append("<tr><td>" + appid + "</td><td>" + fname + "</td><td>" + fphone + "</td><td><img src=\"" + updsign + "\" height=550 width=300></img></td><td>" + approve + "</td><td><input type='submit' id='last' class='button' value='Accept' name='line' onclick=\"approved(\'" + appid +"\');\"> &nbsp;<input type='submit' id='last' class='button' value='Reject' name='line' onclick=\"rejected(\'" + appid +"\');\"></td></tr>");

});

});


function myFunction() {
  var rowCount = $('#table_body tr').length;
$("#rowscnt").text("Total No. of Students Registered = " + rowCount +"");
}

function approved(appid)
{
  firebase.database().ref("pubg/" + appid).update({ approve: "YES"});
  alert("Technova | Annual Tech Fest 2020 \n PUBG Contest Approval for Application ID : " + appid + " is successful.");
  
}
function rejected(appid)
{

  firebase.database().ref("pubg/" + appid).update({ approve: "NO"});
  alert("Technova | Annual Tech Fest 2020 \n PUBG Contest Approval for Application ID : " + appid + " is rejected.");
}
