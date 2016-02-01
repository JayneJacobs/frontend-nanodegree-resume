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
/*var email = "jaynejacobs@jaynejacobs.com";
var newemail = email.replace("jaynejacobs.com","comcast.net")
console.log(awesomeThoughts, newemail,' ', email);
var funThoughts = awesomeThoughts.replace("AWESOME","FUN")
/*var email = "jaynejacobs@jaynejacobs.com";
var role = "Systems Integration Architecture"	  
	  
var newemail = email.replace("jaynejacobs.com","comcast.net")
console.log(awesomeThoughts, newemail,' ', email);
$("#main").append(funThoughts);

/*var name = "Jayne Jacobs"

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

var s = "audacity";

  
var udacityizer2 = function(s) {  
    // Right now, the variable s === "audacity"
    // Manipulate s to make it equal to "Udacity"
    // Your code goes here!
   	s = s[1].toUpperCase() + s.slice(2);
    return s;
};
/*var formattedName = HTMLheaderName.replace("%data%", name);*/
/*var bio = {"name":name,
"role":role, 
"contact": email, 
"picURL": picURL,
"skills":skills, 
"age":1000, 
"welcomeMsg":welcomeMsg
  };
bio.welcomeMsg = "Broadcast and Video Engineering Skills ";
bio.picURL = "images/Jayne.jpg";*/

var bio = {
"age":57
  };
bio.welcomeMsg = "Broadcast and Video Engineering Skills ";
bio.picURL = "images/Jayne.jpg";
bio.email = "jaynejacobs@jaynejacobs.com";
bio.role = "Systems Integration Architecture";	  
bio.name = "Jayne Jacobs";
bio.skills = [ "System Architecture", " IPTV"," IP Video Distribution" ," EAS/CAP"," VOD"," CDN"," Advanced-Advertising",
" DECE-Ultraviolet", " Audio Processing"," Acquisition"," Encryption"," Ad-Insertion",
" Live and Linear Services"," Analytics", 
" Security Systems"," Key Management and Distribution"," KMS"," DRM"," AES"," SSO" , 
" SAML"," AES"," PKI"," MD5"," SHA-1"," SHA256"," X.509"," certificate and license management",
" RF "," QAM"," QPSK"," AM/FM"," Satellite",  " 802.11",
" IP"," IPv6"," TCP"," MPEG 2"," DSM-CC", " Flute" , " SDV"," XML"," HTML 5"," DASH", "AC3"," SNMP", 
" OS Administration"," Linux"," UNIX"," Windows NT"," Windows 7/8Server" ," Android ", " Ubuntu ", " VMware"
];
bio["city"] = "Philadelphia";



/*var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#header").prepend(formattedName);

/*var formattedPicture = HTMLbioPic.replace("%data%", bio.picURL);
$("#header").prepend(formattedPicture);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").prepend(formattedSkills);

/*var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").prepend(formattedwelcomeMsg);

/*var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#header").prepend(formattedRole);*/


var formattedwelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
$("#header").append(formattedwelcomeMsg);

var formattedPicture = HTMLbioPic.replace("%data%", bio.picURL);
$("#header").prepend(formattedPicture);

var formattedSkills = HTMLskills.replace("%data%", bio.skills);
$("#header").append(formattedSkills);


var formattedEmail = HTMLemail.replace("%data%", bio.email);
$("#header").append(formattedEmail);
//$("#main").prepend(formattedEmail);
/*main*/
//var formattedEmail = HTMLemail.replace("%data%", bio.email);

var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#main").prepend(formattedRole);
var formattedCity = HTMLCity.replace("%data%", bio['city']);
$("#main").prepend(formattedCity);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#main").prepend(formattedName);
//work and Education

jobTitle = "Systems Integration Architect"
companyName = "IntePros LLC"
startYear = 2014
endYear = "present"
var work = {
	"position":jobTitle, "employer":companyName,
	};
	
//work.years = startYear,"-",endYear;
work.years = startYear

work.city = "companyCity";
companyCity = "Philadelphia";

//recent


var formattedPosition = HTMLworkTitle.replace("%data%", work["position"]);
$("#workExperience").append(formattedPosition);

educationCity = "Minnisota";
school = "www.capella.edu"
yearStart = 1999
yearEnd = 2003
degree = "Masters of Science"
major = "Network Engineering"

educationCity1 = "Minnisota";
school1 = "www.capella.edu"
yearStart1 = 1996
yearEnd1 = 1999
degree1 = "Project Management"
major1 = "BS"
var education = [{"school":school, 
"yearStart":yearStart, 
"yearEnd":yearEnd, degree:degree, major:major}
{"school":school1, 
"yearStart":yearStart1, 
"yearEnd":yearEnd1,
degree:degree1, major:major1}];

var educationCity="Minnisota";
var school="www.capella.edu";
var yearStart=1999;
var yearEnd=2003;
var degree="Masters of Science";
var major="Network Engineering";
var educationCity1="Minnisota";
var school1="www.capella.edu";
var yearStart1=1996;
var yearEnd1=1999;
var degree1="Project Management";
var major1="BS";
 {
 	"schools": [{
 		"school": "www.capella.edu",
 		"yearStart": 1999,
 		"yearEnd": 2003,
 		"degree": "Masters of Science",
 		"major": "Network Engineering",
 		"city": "Minnisota"
 	}, {
 		"school": "www.capella.edu",
 		"yearStart": 1996,
 		"yearEnd": 1999,
 		"degree": "Baccalaurs of Science",
 		"major": "Project Management",
 		"city": "Minnisota"
 	}
  ]
 },
	"onlineCourses":  [
	{"title":"JavaScript",
	"school": "Udacity",
	"dates":2016,
	"url":"http://www.udacity.com/course/ud804"
	}
	{"title":"Computer Science",
	"school": "Udacity",
	"dates":2016,
	"url":"http://www.udacity.com/course/ud803"
	}
	{"title":"How to use Git",
	"school": "Udacity",
	"dates":2016,
	"url":"http://www.udacity.com/course/ud800"
	}
	]
	
var education={
    "schools2": [
        {
            "school": school,
            "yearStart": yearStart,
            "yearEnd": yearEnd,
            "degree": degree,
            "major": major,
            "city": educationCity
        },
        {
            "school": school1,
            "yearStart": yearStart1,
            "yearEnd": yearEnd1,
            "degree": degree1,
            "major": major1,
            "city": educationCity1
        }
    ]
};

education["city"] = educationCity;

var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);
$("#education").append(formattedSchoolName);

// Did your code work? The line below will tell you!
console.log(work.position, work.years, education.city, education.school);

console.log(udacityizer2(s));
$("#main").append(work["position"], " ");
$("#main").append(formattedSchoolName);
