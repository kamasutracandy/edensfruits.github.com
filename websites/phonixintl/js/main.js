// attempting to prvent content from resizing

$('#about').click(function(){
    $('#hidden_content').slideToggle('slow', function(){
        if( $('#hidden_content').is(':hidden') ){
            $('#about').text('About');
        } else {
            $('#about').text('Hide content');
        }
    });
    
});

$('#android').click(function(){
    $('#hidden_content2').slideToggle('slow', function(){
        if( $('#hidden_content2').is(':hidden') ){
            $('#android').text('Android');
        } else {
            $('#android').text('Hide content');
        }
    });
    
});

$('#ios').click(function(){
    $('#hidden_content3').slideToggle('slow', function(){
        if( $('#hidden_content3').is(':hidden') ){
            $('#ios').text('iOS');
        } else {
            $('#ios').text('Hide content');
        }
    });
    
});

$('#web').click(function(){
    $('#hidden_content4').slideToggle('slow', function(){
        if( $('#hidden_content4').is(':hidden') ){
            $('#web').text('Mobile Web');
        } else {
            $('#web').text('Hide content');
        }
    });
    
});

$('#brains').click(function(){
    $('#hidden_content5').slideToggle('slow', function(){
        if( $('#hidden_content5').is(':hidden') ){
            $('#brains').text('Why Hire Us?');
        } else {
            $('#brains').text('Hide content');
        }
    });
    
});

$("#mobile").click(function(){
	window.location="mobile.html";
});

$("#desktop").click(function(){
	window.location="desktop.html";
});

$(document).ready(function() {
   //Call a variable to know the width of the window
    var screenWidth = $(window).width();
    $('content').css('width', screenWidth + 'px');

    /*
    $("#about").click(function(){
        $("#hidden_content").slideToggle("slow");
        $("#about").text("Testing");
    });
*/

        // Paste your code in here!
        var myLibrary = function(){
            // Private Variables
            // Problem 1. Number - Find number of days between two dates:
            var daysBetween = function(date1,date2) {
                var dateOne = new Date("07/21/2010");
                var dateTwo = new Date("06/21/2012");
                var timeDiff = Math.abs(dateTwo.getTime() - dateOne.getTime());
                if ((dateOne === "(^\d{1,2}\/\d{1,2}\/\d{4}$)") && (dateTwo === "(^\d{1,2}\/\d{1,2}\/\d{4}$)")){
                	return Math.abs(dateTwo.getTime() - dateOne.getTime());
                }
                	return Math.ceil(timeDiff / (1000 * 3600 * 24));
            };
               
            // Problem 2. String - Does it follow a pattern like an email (aaa@bbb.ccc)?
            var checkEmail = function(email) {
                	var emailInput = "";
            		if ((emailInput === ("[a-z]" + "@" + "[a-z]" + "."))){
            			return true;
            		} else if ("^([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$"){
            			return true;
            		} else {
            			return false;
            		}	
            };
            
            // Problem 3. String - Is it a URL?
            var checkURL = function validateUrl(url) {
            	var urlInput = "";
            	if ((urlInput === "^([a-zA-Z0-9]([a-zA-Z0-9\-]{0,61}[a-zA-Z0-9])?" + "\.)+" + "[a-zA-Z]{2,6}$")){
            		return true;
            	} else if (("\b(((\S+)?)(@|mailto\:|(news|(ht|f)tp(s?))\://)\S+)\b")){
            		return true;
            	} else
                return (/^[a-z]+:\/\//i.test(url));
            };
            
            // Problem 4. String - Does it follow a 123-456-7890 pattern like a phone number?
            var checkNumber = function(val){
                    var phoneInput = "";
                    if ((phoneInput === "(\\d{3})" + "-" + "(\\d{3})" + "-" + "(\\d{4})")){
                        return true;
                    } else if (("^([\(]{1}[0-9]{3}[\)]{1}[\.| |\-]{0,1}|^[0-9]{3}[\.|\-| ]?)?[0-9]{3}(\.|\-| )?[0-9]{4}$")){
                        return true;
                    } else {
                    	return false;
                    }
            };
            // Problem 5. String - Title-case a string (uppercase the first letter of each word):
          	var titleString = function(str){
            	String.prototype.toProperCase = function (){
                	return this.replace(/\w\S*/g, function (txt){
                    	return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
                	});
            	};
            	str.toProperCase();
            	console.log(str.toProperCase());
        	};
         	// Problem 6. Number - Given a string version of a number such as "42", return the value as an actual Number, such as 42:
            var numString = function(val){
                var number = "11";
                var n = number.toString();
                    return number;
            };
            // Return variables for use outside of the private functions:
            return {
                "daysBetween":daysBetween,
                "checkEmail":checkEmail,
                "checkURL":checkURL,
                "checkNumber":checkNumber,
                "titleString":titleString,
                "numString":numString
            };
                
        };
        // Public Variables:

        var newLib = new myLibrary();

        console.log(newLib.daysBetween("7/21/2010","6/21/2012")); // WORKS!
        console.log(newLib.checkEmail("me@gmail.com")); // WORKS!
        console.log(newLib.checkURL("http://www.fullsail.edu")); // WORKS!
        console.log(newLib.checkURL("google.com")); // WORKS!
        console.log(newLib.checkNumber("123-456-7890")); // should be true // IS FALSE
        console.log(newLib.titleString("mary had a little lamb")); // WORKS!
        console.log(newLib.numString("11")); // WORKS!

});
