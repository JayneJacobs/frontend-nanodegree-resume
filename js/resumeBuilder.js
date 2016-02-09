/*
This is empty on purpose! Your code to build the resume will go here.*/
 

var skills = [ "System Architecture", " IPTV"," IP Video Distribution" ," EAS/CAP"," VOD"," CDN"," Advanced-Advertising",
" DECE-Ultraviolet", " Audio Processing"," Acquisition"," Encryption"," Ad-Insertion",
" Live and Linear Services"," Analytics", 
" Security Systems"," Key Management and Distribution"," KMS"," DRM"," AES"," SSO" , 
" SAML"," AES"," PKI"," MD5"," SHA-1"," SHA256"," X.509"," certificate and license management",
" RF "," QAM"," QPSK"," AM/FM"," Satellite",  " 802.11",
" IP"," IPv6"," TCP"," MPEG 2"," DSM-CC", " Flute" , " SDV"," XML"," HTML 5"," DASH", "AC3"," SNMP", 
" OS Administration"," Linux"," UNIX"," Windows NT"," Windows 7/8Server" ," Android ", " Ubuntu ", " VMware"
];


var bio = {
"age":57
  };
bio.welcomeMsg = "Broadcast and Video Engineering Skills ";
bio.picURL = "images/Jayne.jpg";
bio.email = "jaynejacobs@jaynejacobs.com";
bio.role = "Systems Integration Architecture";	  
bio.name = "Jayne Jacobs";
bio.skills = skills;
bio["city"] = "Philadelphia";

var work = {
 	"jobs": [
	{
 		"position":"Systems Integration Architect",
		"companyName" : "IntePros LLC",
		"description" :"This job ",
 		"years" : 2014,
 		"endYear": "present",
 		"city": "Philadelphia"
 	}, {
 		"position":"Systems Integration Architect",
		"companyName": "Verizon Inc",
		"description" : "This job ",
 		"years" : 2011,
 		"endYear": 2014,
 		"city": "Philadelphia"
 	}
  ]
 }
 
var project = {
 	"projects": [{
 		"system":"Linear Segmented Advertising",
		"role" : "Integration Architect",
		"description" :"Cable Television Linear systems Alternate Ad Insertion with Decision Engine",
 		"years" : 2014,
 		"endYear": "present",
 		"city": "Philadelphia"
 	}, {
 		"system":"Digital Rights Management",
		"role" : "Integration Architect",
		"description" : "Key Management, Access Control, and Certificate Management",
 		"years" : 2012,
 		"endYear": "2014",
 		"city": "Philadelphia"
 	},
	{
 		"system":"IP Video Ad Insertion",
		"role" : "Integration Architect",
		"description":"Internet IPTV Television systems SCTE 130 based Targetted Ad Insertion with server-side Decision Engine",
 		"years" : 2011,
 		"endYear": "2014",
 		"city": "Philadelphia"
 	},
	{
 		"system":"Video System Control and Monitoring",
		"role" : "System Design",
 		"years" : 2005,
 		"endYear": "2011",
 		"city": "Philadelphia"
 	}
  ]
 };
 

var education = {
 	"schools": [
	{
 		"school": "www.capella.edu",
 		"yearStart": 1999,
 		"yearEnd": 2003,
 		"degree": "Masters of Science",
 		"major": "Network Engineering",
 		"city": "Minnisota"
 	}, 
	{
 		"school": "www.capella.edu",
 		"yearStart": 1996,
 		"yearEnd": 1999,
 		"degree": "Bachelor of Science",
 		"major": "Project Management",
 		"city": "Minnisota"
 	}
  ],
  	"onlineCourses": [
	{"title":"JavaScript",
	"school": "Udacity",
	"dates":2016,
	"url":"http://www.udacity.com/course/ud804"
	},
	{"title":"Computer Science",
	"school": "Udacity",
	"dates":2016,
	"url":"http://www.udacity.com/course/ud803"
	},
	{"title":"How to use Git",
	"school": "Udacity",
	"dates":2016,
	"url":"http://www.udacity.com/course/ud800"
	}
	]
};
var html = '<script src="http://hackyourwebsite.com/eviljavascript.js"></script>';
	
	var charEscape = function(_html) {
	var newHTML = _html;
	
    newHTML = _html.replace(/</g, "&lt;");
    newHTML = newHTML.replace(/>/g, "&gt;");
	
    return newHTML;
	};
	
	// Did your code work? The line below will tell you!
	console.log(charEscape(html));

/*

/*
bio.skills = [ "System Architecture", " IPTV"," IP Video Distribution" ," EAS/CAP"," VOD"," CDN"," Advanced-Advertising",
" DECE-Ultraviolet", " Audio Processing"," Acquisition"," Encryption"," Ad-Insertion",
" Live and Linear Services"," Analytics", 
" Security Systems"," Key Management and Distribution"," KMS"," DRM"," AES"," SSO" , 
" SAML"," AES"," PKI"," MD5"," SHA-1"," SHA256"," X.509"," certificate and license management",
" RF "," QAM"," QPSK"," AM/FM"," Satellite",  " 802.11",
" IP"," IPv6"," TCP"," MPEG 2"," DSM-CC", " Flute" , " SDV"," XML"," HTML 5"," DASH", "AC3"," SNMP", 
" OS Administration"," Linux"," UNIX"," Windows NT"," Windows 7/8Server" ," Android ", " Ubuntu ", " VMware"
];*/


/*
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
//var formattedEmail = HTMLemail.replace("%data%", bio.email);*/)
/*
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
$("#main").prepend(formattedRole);
var formattedCity = HTMLCity.replace("%data%", bio['city']);
$("#main").prepend(formattedCity);
var formattedName = HTMLheaderName.replace("%data%", bio.name);
$("#main").prepend(formattedName);*/
//work and Education

/*
//recent

var formattedPosition = HTMLworkTitle.replace("%data%", work["position"]);
$("#workExperience").append(formattedPosition);




var formattedSchoolName = HTMLschoolName.replace("%data%", education.school);
$("#education").append(formattedSchoolName);

// Did your code work? The line below will tell you!
console.log(work.position, work.years, education.city, education.school);

console.log(udacityizer2(s));
$("#main").append(work["position"], " ");
$("#main").append(formattedSchoolName);*/
