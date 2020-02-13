// Initialize Firebase (ADD YOUR OWN DATA)
var appid = "";
function appidset(){
	var date = new Date();
	var timestamp = date.getTime();
	appid = timestamp;
  document.getElementById("idset").innerHTML = "Your SQUAD ID for PUBG is: " + appid;
  document.getElementById("appidsetval").value = appid;
  document.getElementById("sqname").value = appid;
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
var sname = getInputVal('sname');
var tname = getInputVal('tname');
var ffname = getInputVal('ffname');
var	fmail = getInputVal('fmail');
var	fphone = getInputVal('fphone');
var	fevent = 'PUBG';
var updsign = getInputVal('updsign');
var approve = 'NO';
var appid = getInputVal('appidsetval');
  saveMessage(fname,sname,tname,ffname,fmail,fphone,fevent,updsign,approve,appid);


  document.getElementById("contactForm").style.display = 'none';
  document.getElementById("instructions").style.display = 'none';
  document.getElementById("thankyou").style.display = 'block';

  document.getElementById('contactForm').reset();
}

function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase   
function saveMessage(fname,sname,tname,ffname,fmail,fphone,fevent,updsign,approve,appid){

  firebase.database().ref('pubg/' + appid).set({
fname:fname,
sname:sname,
tname:tname,
ffname:ffname,
fmail:fmail,
fphone:fphone,
fevent:fevent,
updsign:updsign,
approve:approve,
appid:appid
  });
}


var fbBucketName2 = 'transaction';

    var uploader2 = document.getElementById('uploader2');
    var fileButton2 = document.getElementById('fileButton2');
    fileButton2.addEventListener('change', function (e2) {

      console.log('file upload event', e2);

      var file2 = e2.target.files[0];

      var str = e2.target.files[0].type;
      
      var n = str.length - str.lastIndexOf("/") -1;
      
      var strt = str.substr(str.length - n);

      var storageRef2 = firebase.storage().ref(`${fbBucketName2}/pay${appid}.${strt}`);

      var uploadTask2 = storageRef2.put(file2);

      uploadTask2.on(firebase.storage.TaskEvent.STATE_CHANGED, 
        function (snapshot) {
          var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          uploader2.value = progress;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: 
              console.log('Upload is paused');
              break;
            case firebase.storage.TaskState.RUNNING: 
              console.log('Upload is running');
              break;
          }
        }, function (error) {

            switch (error.code) {
            case 'storage/unauthorized':
              break;

            case 'storage/canceled':
              break;

            case 'storage/unknown':
              break;
          }
        }, function () {
          var downloadURL2 = uploadTask2.snapshot.downloadURL;
          console.log('downloadURL2', downloadURL2);
          var link2 = document.getElementById("signature");
          link2.setAttribute("src", downloadURL2);
          document.getElementById('updsign').value = downloadURL2;
        });

    });


	
function chkn() {
		//var userID = document.getElementById("finalusername").value;
		if (window.sessionStorage) 
				{
					sessionStorage.setItem("appid", appid);
					window.open("login/login_pubg.html");
					
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
    var clngt=document.getElementById("sphone").value.length;
    if(clngt!=10)
    {
      swal("Oops..","Contact no. must contain 10 digits. Please re-type.","error");
      document.getElementById("sphone").value ="";
      document.getElementById("sphone").focus();
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
   	else if(document.getElementById("updsign").value==="" || document.getElementById("updsign").value==="NA"){
   element.checked = !element.checked;
   swal("Oops..","Upload Payment Screenshot","error");
   document.getElementById("updsign").focus();}
   	   	
   	else{
   element.checked = element.checked;
   document.getElementById("submitbtn").disabled = !element.checked;
   swal("TECHNOVA || Annual Tech Fest","Check all details carefully and be sure that you have made payment correctly and be sure that your successful transaction screenshot has uploaded before Submit.","info");
   }
 }
