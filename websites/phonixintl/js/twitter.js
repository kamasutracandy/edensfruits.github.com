// Paste your code in here!
// Norell's Twitter feed

// Paste your code in here!
// Norell's Twitter feed 
//Twitter Parsers
String.prototype.parseURL = function() {
    return this.replace(/[A-Za-z]+:\/\/[A-Za-z0-9-_]+\.[A-Za-z0-9-_:%&~\?\/.=]+/g, function(url) {
        return url.link(url);
    });
};
String.prototype.parseUsername = function() {
    return this.replace(/[@]+[A-Za-z0-9-_]+/g, function(u) {
        var username = u.replace("@","");
        return u.link("http://twitter.com/"+username);
    });
};
String.prototype.parseHashtag = function() {
    return this.replace(/[#]+[A-Za-z0-9-_]+/g, function(t) {
        var tag = t.replace("#","%23");
        return t.link("http://search.twitter.com/search?q="+tag);
    });
};
function parseDate(str) {
    var v=str.split(' ');
    return new Date(Date.parse(v[1]+" "+v[2]+", "+v[5]+" "+v[3]+" UTC"));
} 
 
function loadLatestTweet(){
    var numTweets = 1;
    var _url = 'https://api.twitter.com/1/statuses/user_timeline/CypressNorth.json?callback=?&count='+numTweets+'&include_rts=1';
    $.getJSON(_url,function(data){
    for(var i = 0; i< data.length; i++){
            var tweet = data[i].text;
            var created = parseDate(data[i].created_at);
            var createdDate = created.getDate()+'-'+(created.getMonth()+1)+'-'+created.getFullYear()+' at '+created.getHours()+':'+created.getMinutes();
            tweet = tweet.parseURL().parseUsername().parseHashtag();
            tweet += '<div class="tweeter-info"><div class="uppercase bold"><a href="https://twitter.com/#!/CypressNorth" target="_blank" class="black">@CypressNorth</a></div><div class="right"><a href="https://twitter.com/#!/CypressNorth/status/'+data[i].id_str+'">'+createdDate+'</a></div></div>';
            $("#twitter-feed").append('<p>'+tweet+'</p>');
        }
    });
}

$('#rss').live('pageshow', function() {
    loadLatestTweet();
}); 


/*$(function () { 
  //http://search.twitter.com/search.json?q=norell&rpp=8&include_entities=true&result_type=mixed&callback=?
  //search for @MaryNorell tweets and mentions
  //https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=MaryNorell&count=4
$('#rss').on('pageinit', function(){
  $.getJSON("http://search.twitter.com/search.json?q=marynorell&rpp=4&include_entities=true&result_type=mixed&callback=?",
            
            function (data) {
            console.log(data);
            $("#data-tweet").html("<p style='color: black; text-shadow: 1px 1px #ff0000; font-size: 20px;'>Norell's Recent Tweets'</p>");
            for (i = 0, j = data.results.length; i < j; i++) {
            $("#data-tweetput")
            .append("<li>" +
                    "<p>" + "<img src='" + data.results[i].profile_image_url + "' /><br />" + data.results[i].text + "<em>" + data.results[i].created_at +"</em>" + " <a href=https://twitter.com/" + data.results[i].from_user +
                    ">@" + data.results[i].from_user +
                    "</p>" + 

                    //Places icons for reply, retweet, favorite, but haven't gotten the code down yet.

                    "<p>" + "<a href='https://twitter.com/intent/tweet?in_reply_to=" + data.results[i].from_user + "'>" + "<img src='img/reply.png'>" + "</a>" + "</p>" + 
                    "<p>" + "<a href='https://twitter.com/intent/retweet?tweet_id=" + data.results[i].from_user + "'>" + "<img src='img/retweet.png'>" + "</a>" + "</p>" + 
                    "<p>" + "<a href='https://twitter.com/intent/favorite?tweet_id=" + data.results[i].from_user + "'>" + "<img src='img/favorite.png'>" + "</a>" + "</p>" + 

                    "</li>");
            }
            });
    });

    $("#twitter").on("click", function () {
            var next = "";
            var i, x;
            function addlinks(data) {
            //Add link to all http:// links within tweets
            data = data.replace(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9.\-]+|(?:www.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9.\-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[\-\+=&;%@.\w_]*)#?(?:[\w]*))?)/,
                                function (url) {
                                return '<a href="' + url + '" target="_blank">' + url + '</a>';
                                });
            //Add link to @usernames used within tweets
            data = data.replace(/\B@([_a-z0-9]+)/ig, function (reply) {
                                return '<a href="http://twitter.com/' +
                                reply.substring(1) + '" style="font-weight:lighter;" target="_blank">' +
                                reply.charAt(0) + reply.substring(1) + '</a>';
                                });
            return data;
            };
          
        });  
    };
    
    
});

*/
  /*
// Instagram API a Work in Progress

var getInstagram = function() {
  $.getJSON("https://api.instagram.com/v1/tags/stpatricksday/media/recent?access_token=36600076.9ef9f59.9f461e68e9984b2b9eb99473f436f3dc&callback=?",
              function(data) {
              console.log(data);
              for (i=0, j=data.data.length; i<j; i++) {
              $("#Feed")
              .append("<li>" +
                      "<img src='" + data.data[i].images.standard_resolution.url + "' />" + "<b>" + data.data[i].user.username + "<br />" + "<br />" + "<p>" + data.data[i].caption.text
                      );
              }
              $("#Feed").listview("refresh");
              });
    
};
*/

/*
$(function() {
  $.getJSON("https://api.instagram.com/v1/users/norellxo/feed?access_token=ACCESS-TOKEN",
          function(results) {
          console.log(results);
          $("#instafeed").html("<li>Recently on Instagram...</li>");
          for (i=0, j=results.data.length; i<j; i++) {
          $("#instanorell")
          .append("<li>" +
                  "<img src='" + results.data[i].images.standard_resolution.url + "'>" +
                  "<h2>" + results.data[i].user.username + "</h2>" +
                  "<p>" + results.data[i].caption.text + "</p>" + "</li>"
                  );
          }
            });
  
  });
*/

