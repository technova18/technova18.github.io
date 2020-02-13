
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

var flag=0;

const dbRef = firebase.database().ref();

const usersRef = dbRef.child('pubg');

usersRef.on("child_added", snap => {

	let user = snap.val();

	let $li = document.createElement("li");
	$li.innerHTML = user.name;
	$li.setAttribute("child-key", snap.key);
	$li.addEventListener("click", userClicked)
	userListUI.append($li);
});


function userClicked(e) {
	var psd = document.getElementById("password").value;
	var userID = document.getElementById("username").value;
	var ast="";
	const userRef = dbRef.child('pubg/' + psd);
	const userDetailUI = document.getElementById("userDetail");

	userDetailUI.innerHTML = ""

	userRef.on("child_added", snap => 
	{
		if(snap.key=="appid")
		{
				ast=snap.val();
		}
		if(snap.key=="fmail")
		{
				chsn = snap.val();
		}
		if(ast==psd && chsn==userID)
		{	
			flag=1;
		}
	});
	chkn();
}

function chkn() {
	if(flag==1)
	{
		var psd = document.getElementById("password").value;
		if (window.sessionStorage) 
				{
					sessionStorage.setItem("appid", psd);
					var myWindow = window.open("");
  					myWindow.document.write("<title>Technova || Annual Tech Fest</title><iframe width='100%' height='100%' src='login_pubg.html' frameborder='0' allowfullscreen></iframe>");
				}
	}
	else
	{
		alert("Sorry! \n You entered wrong Application ID or Email ID!");
	}
}