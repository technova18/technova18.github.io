function getusername()
            {
                var username= parseInt(sessionStorage.getItem("appid"));
                /*
                var fname= parseInt(sessionStorage.getItem("fname"));
                var fmail= parseInt(sessionStorage.getItem("fmail"));
                */
                //return username;
                document.getElementById("dappid").innerHTML = "Your Application ID is: " + username;
                /*
                document.getElementById("dfname").innerHTML = "Name of the 1st Participant: " + dfname;
                document.getElementById("dfmail").innerHTML = "Email ID of the 1st Participant: " + dfmail;
                */
                document.getElementById("content").value = username;
                document.title = "Application Form ID: " + username;
                document.getElementById("generate").click();
            }