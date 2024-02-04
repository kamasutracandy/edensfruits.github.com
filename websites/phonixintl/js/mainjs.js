//ASD Week2
$('#home').on('pageinit', function () {
    //code needed for home page goes here
});

$('#brains').click(function(){
    $('#hidden_content5').slideToggle('medium', function(){
        if( $('#hidden_content5').is(':hidden') ){
            $('#brains').text('Why Hire Us?');
        } else {
            $('#brains').text('Hide content');
        }

    });
    
});

$('#zander').click(function(){
    $('#hidden_content6').slideToggle('medium', function(){
        if( $('#hidden_content6').is(':hidden') ){
            $('#zander').text('About Zander');
        } else {
            $('#zander').text('Hide content');
        }

    });
    
});

$('#norell').click(function(){
    $('#hidden_content7').slideToggle('medium', function(){
        if( $('#hidden_content7').is(':hidden') ){
            $('#norell').text('About Norell');
        } else {
            $('#norell').text('Hide content');
        }

    });
    
});

$('#terry').click(function(){
    $('#hidden_content8').slideToggle('medium', function(){
        if( $('#hidden_content8').is(':hidden') ){
            $('#terry').text('About Terry');
        } else {
            $('#terry').text('Hide content');
        }

    });
    
});

$('#nicole').click(function(){
    $('#hidden_content9').slideToggle('medium', function(){
        if( $('#hidden_content9').is(':hidden') ){
            $('#nicole').text('About Nicole');
        } else {
            $('#nicole').text('Hide content');
        }

    });
    
});

$('#jess').click(function(){
    $('#hidden_content10').slideToggle('medium', function(){
        if( $('#hidden_content10').is(':hidden') ){
            $('#jess').text('About Jessica');
        } else {
            $('#jess').text('Hide content');
        }

    });
    
});

$('#angel').click(function(){
    $('#hidden_content11').slideToggle('medium', function(){
        if( $('#hidden_content11').is(':hidden') ){
            $('#angel').text('About Angelica');
        } else {
            $('#angel').text('Hide content');
        }

    });
    
});

$('#signup').on('pageinit', function () {
    function checkData() {
        delete $.validator.methods.date;
        //    Set Link & Submit Click Events
        var myForm = $("#signupform");
        suerrorslink = $("#suerrorslink");
        susuccesslink = $("#susuccess");;

        myForm.validate({
            invalidHandler: function (form, validator) {
                suerrorslink.on("click");
                var html = "";
                for (var key in validator.submitted) {
                    var label = $('label[for^="' + key + '"]').not('[generated]');
                    var legend = label.closest('fieldset').find('.ui-controlgroup-label');
                    var fieldName = legend.length ? legend.text() : label.text();
                    html += '<li>' + fieldName + '</li>';
                };
                $("#signuperrors ul").html(html);
            },
            submitHandler: function (html) {
                var data = myForm.serializeArray();
                storeData(data);
                $("#susuccess ul").html(html);
                console.log("validation successful");
            }

        });

    };
    $("#submitData").on("click", checkData);

    // clearButton.addEventListener("click", clearForm);
    // to reset form - changed addEventListener
    $("#clearButton").on("click", clearForm);

    function clearForm() {
        var mySlider = $("#contact");
        if (mySlider.value === "on") {
            $(this).attr("checked", true);
        } else {
            $(this).removeAttr("checked");
            window.location.reload();
        }
    }
});


//calling this function to occur when #display is clicked
/*
$("#display").on("click", function getData(){
    if(localStorage.length === 0){
        alert("There is no data in Local Storage, but you may view default data.");
    }
    console.log("Get Data");
    var getListDiv = $("#list")[0];
    for(var i = 0, j = localStorage.length; i < j; i++){
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
            value = value.split(",");
        var imageLi = "";
            if("#updates".value === "MobileDev"){
                var image = "Music";
            }else if("#updates".value === "BodyPaint"){
                var image = "Book";
            }else if("#updates".value === "ZN"){
                var image = "ZN";
            }else if("#updates".value === "Special Offers"){
                var image = "Special";
            }else if("#updates".value === "All of the Above"){
                var image = "All";
            }

        $("<div>").attr({
            "class": "listDiv"
        }).appendTo("#list");
        //need to set images for each type of updates selected in mailing list form
        $("<p>").html("First Name: " + value[1]).appendTo(".listDiv");
        $("<p>").html("Last Name: " + value[2]).appendTo(".listDiv");
        $("<p>").html("Birthday: " + value[3]).appendTo(".listDiv");
        $("<p>").html("Email: " + value[4]).appendTo(".listDiv");
        $("<p>").html("Phone Number: " + value[5]).appendTo(".listDiv");
        $("<img>").attr({
            "src": "img/" + image + ".png"
        }).appendTo(".listDiv");
        $("<p>").html("I would like to receive updates on: " + value[6]).appendTo(".listDiv");
        $("<p>").html("Best method of contact: " + value[7]).appendTo(".listDiv");
        $("<p>").html("Leave a comment for Norell?: " + value[8]).appendTo(".listDiv");
        $("<p>").html($("<a>").attr({
            "href": "#",
            "onclick": "editItem(" + key + ");"
        }).html("Edit Information")).appendTo(".listDiv");
        $("<p>").html($("<a>").attr({
            "href": "#",
            "onclick": "deleteItem(" + key + ");"
        }).html("Remove from Mailing List?")).appendTo(".listDiv");
    }

});
*/

/*
var getData = function () {
    console.log("Get Data");
    if (localStorage.length === 0) {
        alert("There is no data in Local Storage so default data was added.");
        autoFillData();
    }
    //replacing getElementById with $("#id")
    var displayFans = $("#mailingListFans");
    //replacing innerHTML with .html()
    //displayFans.html("");

    for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        var item = JSON.parse(value);

        // will this display it then with jquery?
        $(this).html("<li>" + (key, value) + "</li>");

        var makeDiv = $("<div></div>")
            .attr("data-role", "collapsible")
            .attr("id", key)
            .attr("data-filter", "true")
            .appendTo(displayFans);
        var makeUL = $("<ul></ul>")
            .attr("data-role", "listview")
            .attr("data-inset", "true")
            .html(item.firstname[1] + item.comments[1])
            .appendTo(makeDiv);
        var makeList = $("<li></li>")
            .attr("data-role", "list-divider")
            .appendTo(makeUL);
        for (var n in item) {
            var makeLi = $("<li></li>")
                .html(item[n][0] + " " + item[n][1])
                .appendTo(makeUL);
        }


        var makeButtonTable = $("<div></div>")
            .attr("class", "ui-grid-a")
            .appendTo(makeDiv);
        var makeEditButton = $("<div></div>")
            .attr("class", "ui-block-a")
            .appendTo(makeButtonTable);
        var makeDeleteButton = $("<div></div>")
            .attr("class", "ui-block-b")
            .appendTo(makeButtonTable);
        var editButton = $("<a></a>")
            .attr("data-role", "button")
            .attr("href", "#signup")
            .html("Edit Your Information")
            .data("key", key)
            .appendTo(makeEditButton);
        var deleteButton = $("<a></a>")
            .attr("data-role", "button")
            .attr("href", "#")
            .html("Remove From Mailing List?")
            .data("key", key)
            .appendTo(makeDeleteButton);
        $(editButton).on("click", editItem);
        $(deleteButton).on("click", deleteItem);
        //"Suggest to Friend"
        $(makeDiv).trigger("create");
        $(displayFans).trigger("create");
    }
};
*/

//try removing data, replace with item
/*
var storeData = function (data, key) {
    if (!key) {
        var id = Math.floor(Math.random() * 10000000);
    } else {
        var id = key;
    }
    var item = {};
    item.firstname = ["First Name: ", $("#firstname").val()];
    item.lastname = ["Last Name: ", $("#lastname").val()];
    item.birthday = ["Birthday: ", $("#dob").val()];
    item.email = ["Email: ", $("#email").val()];
    item.phone = ["Phone Number: ", $("#phone").val()];
    item.update = ["I would like to receive updates on: ", $("#updates").val()];
    item.mySlider = ["Which method of contact would you prefer to receive updates by?: ", $("#slider-choice").val()];
    item.comments = ["Leave a comment for Norell?: ", $("#comments").val()];
    //save data into Local Storage: Use Stringify to convert our object to a string.
    localStorage.setItem(id, JSON.stringify(item));
    alert("Thank you for joining Norell's mailing list!");


};
*/

function storeData(id){
    console.log("id", id);

    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var birthday = $("#dob").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var update = $("#updates").val();
    var mySlider = $("#contact").val();
    var comments = $("#comments").val();

    var item = [
    firstname, lastname, birthday, email, phone, update, mySlider, comments];
    if(!id){
        var key = Math.floor(Math.random()*100000001);
    }else{
        key = id;
    }
    console.log(key, item);
    localStorage.setItem(key, item);
    alert("Thank you for joining Ph&ouml;nix LLC's mailing list!");

    /*
    //change page function
    var changePage = function(pageID){
                $('#' + pageID).trigger('pageinit');
                $.mobile.changePage($('#' + pageID), 
                {transition: 'slide'});
    };
    changePage(storeData);
    */
};


//Edit 

function editItem(id){
    var itemId = id;
    var value = localStorage.getItem(itemId);
    value = value.split(",");
    var firstname = value[0];
    var lastname = value[1];
    var birthday = value[2];
    var email = value[3];
    var phone = value[4];
    var update = value[5];
    var mySlider = value[6];
    var comments = value[7];

    $("#firstname").val(firstname);
    $("#lastname").val(lastname);
    $("#dob").val(birthday);
    $("#email").val(email);
    $("#phone").val(phone);
    $("#updates").val(update);
    $("#contact").val(mySlider);
    $("#comments").val(comments);

    //this is incomplete 
}


/*
var editItem = function () {
    var key = $(this).data("key");
    var info = localStorage.getItem(key);
    var fan = JSON.parse(info);

    $("#firstname").val(item.firstname[1]);
    $("#lastname").val(item.lastname[1]);
    $("#dob").val(item.birthday[1]);
    $("#email").val(item.email[1]);
    $("#phone").val(item.phone[1]);
    $("#updates").val(item.update[1]);
    $("form input: slider").each(function (index, value) {
        if ($(this).attr("id") === item.mySlider[1].toLowerCase()) {
            $(this).attr("selected", true);
        } else {
            $(this).removeAttr("selected");
        }
    });
    $("#slider-choice").trigger("create");
    $("#comments").val(item.comments[1]);
    $("#submitData").html("Resubmit").data("key", key);
    console.log(key);
    console.log($("#submitData").data("key"));

};
*/

var deleteItem = function () {
    var ask = confirm("Are you sure you want to be removed from the mailing list?");
    if (ask) {
        localStorage.removeItem($(this).data("key"));
        alert("You have been removed from the mailing list.");
        window.location.reload();
    } else {
        alert("You have not been removed from the mailing list.");
    }
};

//clear all data function
$("#clearAllButton").on("click", clearLocal);

var clearLocal = function () {
    if (localStorage.length === 0) {
        alert("There is no data to clear!");
    } else {
        localStorage.clear();
        alert("You have cleared the mailing list.");
        window.location.reload();
        return false;
    }
};


/*
    
    displayLink.on("click", getData);
    var clearLink = $('#clear');
    clearLink.on("click", clearLocal);
    var save = $('#submitData');
    save.on("click", validate);

	*/

