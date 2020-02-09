// Initialize Firebase (ADD YOUR OWN DATA)
var appid = "";
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	appid = timestamp;
  document.getElementById("idset").innerHTML = "Your Application ID for Online Events is: " + appid;
  document.getElementById("appidsetval").value = appid;
}
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

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
var	fname = getInputVal('fname');
var	fmail = getInputVal('fmail');
var	fphone = getInputVal('fphone');
var	fstrm = getInputVal('fstrm');
var	fyr = getInputVal('fyr');
var	fclg = getInputVal('fclg');
var	fdept = getInputVal('fdept');
var	fevent = getInputVal('fevent');
var	sevent = getInputVal('sevent');
var	tevent = getInputVal('tevent');
var hevent = getInputVal('hevent');
var ffevent = getInputVal('ffevent');
var xevent = getInputVal('xevent');
var nevent = getInputVal('nevent');
var appid = getInputVal('appidsetval');
 // Save message
  saveMessage(fname,fmail,fphone,fstrm,fyr,fclg,fdept,fevent,sevent,tevent,hevent,ffevent,xevent,nevent,appid);


  document.getElementById("contactForm").style.display = 'none';
  document.getElementById("instructions").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(fname,fmail,fphone,fstrm,fyr,fclg,fdept,fevent,sevent,tevent,hevent,ffevent,xevent,nevent,appid){

  firebase.database().ref('online/' + appid).set({
fname:fname,
fmail:fmail,
fphone:fphone,
fstrm:fstrm,
fyr:fyr,
fclg:fclg,
fdept:fdept,
fevent:fevent,
sevent:sevent,
tevent:tevent,
hevent:hevent,
ffevent:ffevent,
xevent:xevent,
nevent:nevent,
appid:appid
  });
}

	
function chkn() {
		//var userID = document.getElementById("finalusername").value;
		if (window.sessionStorage) 
				{
					sessionStorage.setItem("appid", appid);
					window.open("login/login.html");
					
				}
}
 	function contacta(){
 		var clngt=document.getElementById("fphone").value.length;
 		if(clngt!=10)
 		{
 			swal("Oops..","Contact no. must contain 10 digits. Please re-type.","error");
 			document.getElementById("fphone").value ="";
 			document.getElementById("fphone").focus();
 		}
  }

function fevt()
 {
  if(document.getElementById("fevent").checked===true)
  {
    document.getElementById("fevent").value="Treasure Hunt";
  }
  else
  {
    document.getElementById("fevent").value="NA";
  }
 }

 function sevt()
 {
  if(document.getElementById("sevent").checked===true)
  {
    document.getElementById("sevent").value="Protomate";
  }
  else
  {
    document.getElementById("sevent").value="NA";
  }
 }

 function tevt()
 {
  if(document.getElementById("tevent").checked===true)
  {
    document.getElementById("tevent").value="Poster-Maker";
  }
  else
  {
    document.getElementById("tevent").value="NA";
  }
 }

 function hevt()
 {
  if(document.getElementById("hevent").checked===true)
  {
    document.getElementById("hevent").value="Code-Arena RLC";
  }
  else
  {
    document.getElementById("hevent").value="NA";
  }
 }

 function ffevt()
 {
  if(document.getElementById("ffevent").checked===true)
  {
    document.getElementById("ffevent").value="Code-Arena SC";
  }
  else
  {
    document.getElementById("ffevent").value="NA";
  }
 }

 function xevt()
 {
  if(document.getElementById("xevent").checked===true)
  {
    document.getElementById("xevent").value="Decryptus";
  }
  else
  {
    document.getElementById("xevent").value="NA";
  }
 }

function nevt()
 {
  if(document.getElementById("nevent").checked===true)
  {
    document.getElementById("nevent").value="Mindbend";
  }
  else
  {
    document.getElementById("nevent").value="NA";
  }
 }


 	function toggleCheckbox(element)
 {	
 if(document.getElementById("fname").value==="" || document.getElementById("fname").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Your Full Name","error");
   document.getElementById("fname").focus();}
 	else if(document.getElementById("fmail").value==="" || document.getElementById("fmail").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Your Email ID","error");
   document.getElementById("fmail").focus();}
   	else if(document.getElementById("fphone").value==="" || document.getElementById("fphone").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Your Phone Number","error");
   document.getElementById("fphone").focus();}
   	else if(document.getElementById("fstrm").value==="" || document.getElementById("fstrm").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose Your Stream of Study","error");
   document.getElementById("fstrm").focus();}
	else if(document.getElementById("fyr").value==="" || document.getElementById("fyr").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose Your Year / Semester","error");
   document.getElementById("fyr").focus();}
	else if(document.getElementById("fclg").value==="" || document.getElementById("fclg").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Your College Name","error");
   document.getElementById("fclg").focus();}
	else if(document.getElementById("fdept").value==="" || document.getElementById("fdept").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter Your Department name","error");
   document.getElementById("fdept").focus();}
   	   	
   	else{
   element.checked = element.checked;
   document.getElementById("submitbtn").disabled = !element.checked;
   swal("TECHNOVA || Annual Tech Fest","Check all details carefully and be sure that you have participated at least one Online Event and be sure that you have provided all possible details before Submit.","info");
   }
 }
