/*
This is empty on purpose! Your code to build the resume will go here.
 

$("#main").append("Jay Jacobs"); */

var skills = [ "System Architecture", " IPTV"," IP Video Distribution" ," EAS/CAP"," VOD"," CDN"," Advanced-Advertising",
" DECE-Ultraviolet", " Audio Processing"," Acquisition"," Encryption"," Ad-Insertion",
" Live and Linear Services"," Analytics", 
" Security Systems"," Key Management and Distribution"," KMS"," DRM"," AES"," SSO" , 
" SAML"," AES"," PKI"," MD5"," SHA-1"," SHA256"," X.509"," certificate and license management",
" RF "," QAM"," QPSK"," AM/FM"," Satellite",  " 802.11",
" IP"," IPv6"," TCP"," MPEG 2"," DSM-CC", " Flute" , " SDV"," XML"," HTML 5"," DASH", "AC3"," SNMP", 
" OS Administration"," Linux"," UNIX"," Windows NT"," Windows 7/8Server" ," Android ", " Ubuntu ", " VMware"
];

var arrayLenth = skills.length;
/*$("#main").append(skills); 
$("#main").append(skills[0]); 
$("#main").append(skills.length); */

var awesomeThoughts = " I am Jayne Jacobs and I am AWESOME!"
var email = "jaynejacobs@jaynejacobs.com";
var newemail = email.replace("jaynejacobs.com","comcast.net")
console.log(awesomeThoughts, newemail,' ', email);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN")
var email = "jaynejacobs@jaynejacobs.com";
var role = "Systems Integration Architecture"	  
	  
var newemail = email.replace("jaynejacobs.com","comcast.net")
console.log(awesomeThoughts, newemail,' ', email);
$("#main").append(funThoughts);

var name = "Jayne Jacobs"

/*var formattedRole = HTMLheaderRole.replace("%data%", role)  */
/*$("#header").prepend(formattedRole);	 */

/*In Intro to Computer Science, Dave Evans challenges you to use Python to
convert "audacity" to "Udacity". Let's see if you can perform the same manipulation with JavaScript.

Your Challenge

Using string methods, convert "audacity" to "Udacity".

Check out MDN's documentation on JavaScript string methods
 before you get started (hint: slice() will probably be useful). */
 
 /* Write Python code that prints out Udacity (with a capital U), 
# given the definition of s below.*/

/*print 'U' + s[2:8]
String.prototype.slice()

#str.slice(1); 
str2 = "U" + str.slice(1);
console.log*/

var st = "audacity";

var udacityizer = function(st) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
    var str2 = st.slice(-6);
	var st = 'U' + str2;
	return st;
};
var welcomeMsg = "Broadcast and Video Engineering Skills ";
var picURL = "images/Jayne.jpg";
var s = "audacity";

  
var udacityizer2 = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
   	s = s[1].toUpperCase() + s.slice(2);
    return s;
};
/*var formattedName = HTMLheaderName.replace("%data%", name);*/
var bio = {"name":name,
"role":role, 
"contact": email, 
"picURL": picURL,
"skills":skills, 
"age":1000, 
"welcomeMsg":welcomeMsg
  };
var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").prepend(formattedSkills);

var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").prepend(formattedwelcomeMsg);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);

var formattedEmail = HTMLemail.replace("%data%", bio.contact);
$("#header").prepend(formattedEmail);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

var formattedPicture = HTMLbioPic.replace("%data%", bio.picURL);
$("#header").prepend(formattedPicture);




// Did your code work? The line below will tell you!
console.log(udacityizer(st));

console.log(udacityizer2(s));
