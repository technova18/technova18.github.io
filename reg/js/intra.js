// Initialize Firebase (ADD YOUR OWN DATA)
var appid = "";
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	appid = timestamp;
  document.getElementById("idset").innerHTML = "Your Application ID for Intra College Technical Event Registration is: " + appid;
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
var	sname = getInputVal('sname');
var	fmail = getInputVal('fmail');
var	smail = getInputVal('smail');
var	fphone = getInputVal('fphone');
var	sphone = getInputVal('sphone');
var	fstrm = getInputVal('fstrm');
var	sstrm = getInputVal('sstrm');
var	fyr = getInputVal('fyr');
var	syr = getInputVal('syr');
var	fclg = getInputVal('fclg');
var	sclg = getInputVal('sclg');
var	fdept = getInputVal('fdept');
var	sdept = getInputVal('sdept');
var	fevent = getInputVal('fevent');
var	sevent = getInputVal('sevent');
var	tevent = getInputVal('tevent');
var ffevent = getInputVal('ffevent');
var	fsevent = getInputVal('fsevent');
var appid = getInputVal('appidsetval');
var prtype = 'Intra';
 // Save message
  saveMessage(fname,sname,fmail,smail,fphone,sphone,fstrm,sstrm,fyr,syr,fclg,sclg,fdept,sdept,fevent,sevent,tevent,ffevent,fsevent,appid,prtype);


  document.getElementById("contactForm").style.display = 'none';
  document.getElementById("instructions").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(fname,sname,fmail,smail,fphone,sphone,fstrm,sstrm,fyr,syr,fclg,sclg,fdept,sdept,fevent,sevent,tevent,ffevent,fsevent,appid,prtype){

  firebase.database().ref('users/' + appid).set({
fname:fname,
sname:sname,
fmail:fmail,
smail:smail,
fphone:fphone,
sphone:sphone,
fstrm:fstrm,
sstrm:sstrm,
fyr:fyr,
syr:syr,
fclg:fclg,
sclg:sclg,
fdept:fdept,
sdept:sdept,
fevent:fevent,
sevent:sevent,
tevent:tevent,
ffevent:ffevent,
fsevent:fsevent,
appid:appid,
prtype:prtype
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
 	function contactb(){
 		var clngt2=document.getElementById("sphone").value.length;
 		if(clngt2!=10)
 		{
 			swal("Oops..","Contact no. must contain 10 digits. Please re-type.","error");
 			document.getElementById("sphone").value ="";
 			document.getElementById("sphone").focus();
 		}
 		
 	}

function fevt()
 {
  if(document.getElementById("fevent").checked===true)
  {
    document.getElementById("fevent").value="Code-Arena";
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
    document.getElementById("sevent").value="Digikit";
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
    document.getElementById("tevent").value="Draw The Web";
  }
  else
  {
    document.getElementById("tevent").value="NA";
  }
 }

 function ffevt()
 {
  if(document.getElementById("ffevent").checked===true)
  {
    document.getElementById("ffevent").value="Battle of Word";
  }
  else
  {
    document.getElementById("ffevent").value="NA";
  }
 }

 function fsevt()
 {
  if(document.getElementById("fsevent").checked===true)
  {
    document.getElementById("fsevent").value="Battle of Word";
  }
  else
  {
    document.getElementById("fsevent").value="NA";
  }
 }



 	function toggleCheckbox(element)
 {	
 if(document.getElementById("fname").value==="" || document.getElementById("fname").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter 1st Participant's Full Name","error");
   document.getElementById("fname").focus();}
 	else if(document.getElementById("fmail").value==="" || document.getElementById("fmail").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter 1st Participant's Email ID","error");
   document.getElementById("fmail").focus();}
   	else if(document.getElementById("fphone").value==="" || document.getElementById("fphone").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter 1st Participant's Phone Number","error");
   document.getElementById("fphone").focus();}
   	else if(document.getElementById("fstrm").value==="" || document.getElementById("fstrm").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose 1st Participant's Stream of Study","error");
   document.getElementById("fstrm").focus();}
	else if(document.getElementById("fyr").value==="" || document.getElementById("fyr").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Choose 1st Participant's Year / Semester","error");
   document.getElementById("fyr").focus();}
	else if(document.getElementById("fclg").value==="" || document.getElementById("fclg").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter 1st Participant's College Name","error");
   document.getElementById("fclg").focus();}
	else if(document.getElementById("fdept").value==="" || document.getElementById("fdept").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Enter 1st Participant's Department name","error");
   document.getElementById("fdept").focus();}
   	   	
   	else{
   element.checked = element.checked;
   document.getElementById("submitbtn").disabled = !element.checked;
   swal("TECHNOVA || Annual Tech Fest","Check all details carefully and be sure that you have participated at least one event (group / individual) and be sure that you have provided all possible details before Submit.","info");
   }
 }
