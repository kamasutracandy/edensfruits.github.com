/*********************************************************************
*  #### Twitter Post Fetcher v7.0 ####
*  Coded by Jason Mayes 2013. A present to all the developers out there.
*  www.jasonmayes.com
*  Please keep this disclaimer with my code if you use it. Thanks. :-)
*  Got feedback or questions, ask here: 
*  http://www.jasonmayes.com/projects/twitterApi/
*  Updates will be posted to this site.
*********************************************************************/
var twitterFetcher=function(){function t(d){return d.replace(/<b[^>]*>(.*?)<\/b>/gi,function(c,d){return d}).replace(/class=".*?"|data-query-source=".*?"|dir=".*?"|rel=".*?"/gi,"")}function m(d,c){for(var f=[],e=RegExp("(^| )"+c+"( |$)"),g=d.getElementsByTagName("*"),b=0,a=g.length;b<a;b++)e.test(g[b].className)&&f.push(g[b]);return f}var u="",j=20,n=!0,h=[],p=!1,k=!0,l=!0,q=null,r=!0;return{fetch:function(d,c,f,e,g,b,a){void 0===f&&(f=20);void 0===e&&(n=!0);void 0===g&&(g=!0);void 0===b&&(b=!0);
void 0===a&&(a="default");p?h.push({id:d,domId:c,maxTweets:f,enableLinks:e,showUser:g,showTime:b,dateFunction:a}):(p=!0,u=c,j=f,n=e,l=g,k=b,q=a,c=document.createElement("script"),c.type="text/javascript",c.src="//cdn.syndication.twimg.com/widgets/timelines/"+d+"?&lang=en&callback=twitterFetcher.callback&suppress_response_codes=true&rnd="+Math.random(),document.getElementsByTagName("head")[0].appendChild(c))},callback:function(d){var c=document.createElement("div");c.innerHTML=d.body;"undefined"===
typeof c.getElementsByClassName&&(r=!1);var f=d=null,e=null;r?(d=c.getElementsByClassName("e-entry-title"),f=c.getElementsByClassName("p-author"),e=c.getElementsByClassName("dt-updated")):(d=m(c,"e-entry-title"),f=m(c,"p-author"),e=m(c,"dt-updated"));for(var c=[],g=d.length,b=0;b<g;){if("string"!==typeof q){var a=new Date(e[b].getAttribute("datetime").replace(/-/g,"/").replace("T"," ").split("+")[0]),a=q(a);e[b].setAttribute("aria-label",a);if(d[b].innerText)if(r)e[b].innerText=a;else{var s=document.createElement("p"),
v=document.createTextNode(a);s.appendChild(v);s.setAttribute("aria-label",a);e[b]=s}else e[b].textContent=a}n?(a="",l&&(a+='<div class="user">'+t(f[b].innerHTML)+"</div>"),a+='<p class="tweet">'+t(d[b].innerHTML)+"</p>",k&&(a+='<p class="timePosted">'+e[b].getAttribute("aria-label")+"</p>")):d[b].innerText?(a="",l&&(a+='<p class="user">'+f[b].innerText+"</p>"),a+='<p class="tweet">'+d[b].innerText+"</p>",k&&(a+='<p class="timePosted">'+e[b].innerText+"</p>")):(a="",l&&(a+='<p class="user">'+f[b].textContent+
"</p>"),a+='<p class="tweet">'+d[b].textContent+"</p>",k&&(a+='<p class="timePosted">'+e[b].textContent+"</p>"));c.push(a);b++}c.length>j&&c.splice(j,c.length-j);d=c.length;f=0;e=document.getElementById(u);for(g="<ul>";f<d;)g+="<li>"+c[f]+"</li>",f++;e.innerHTML=g+"</ul>";p=!1;0<h.length&&(twitterFetcher.fetch(h[0].id,h[0].domId,h[0].maxTweets,h[0].enableLinks,h[0].showUser,h[0].showTime,h[0].dateFunction),h.splice(0,1))}}}();


/*
* ### HOW TO CREATE A VALID ID TO USE: ###
* Go to www.twitter.com and sign in as normal, go to your settings page.
* Go to "Widgets" on the left hand side.
* Create a new widget for what you need eg "user timeline" or "search" etc. 
* Feel free to check "exclude replies" if you dont want replies in results.
* Now go back to settings page, and then go back to widgets page, you should
* see the widget you just created. Click edit.
* Now look at the URL in your web browser, you will see a long number like this:
* 345735908357048478
* Use this as your ID below instead!
*/

/**
 * How to use fetch function:
 * @param {string} Your Twitter widget ID.
 * @param {string} The ID of the DOM element you want to write results to. 
 * @param {int} Optional - the maximum number of tweets you want returned. Must
 *     be a number between 1 and 20.
 * @param {boolean} Optional - set true if you want urls and hash
       tags to be hyperlinked!
 * @param {boolean} Optional - Set false if you dont want user photo /
 *     name for tweet to show.
 * @param {boolean} Optional - Set false if you dont want time of tweet
 *     to show.
 * @param {function/string} Optional - A function you can specify to format
 *     tweet date/time however you like. This function takes a JavaScript date
 *     as a parameter and returns a String representation of that date.
 *     Alternatively you may specify the string 'default' to leave it with
 *     Twitter's default renderings.
 */

// ##### Simple example 1 #####
// A simple example to get my latest tweet and write to a HTML element with
// id "tweets". Also automatically hyperlinks URLS and user mentions and
// hashtags.
twitterFetcher.fetch('345170787868762112', 'tweets', 1, true);


// ##### Simple example 2 #####
// A simple example to get my latest 5 of my favourite tweets and write to a HTML
// element with id "talk". Also automatically hyperlinks URLS and user mentions and
// hashtags but does not display time of post.
twitterFetcher.fetch('347099293930377217', 'talk', 5, true, true, false);


// ##### Advanced example #####
// An advance example to get latest 5 posts using hashtag #API and write to a
// HTML element with id "tweets2" without showing user details and using a
// custom format to display the date/time of the post.
twitterFetcher.fetch('345690956013633536', 'tweets2', 5, true, false, true, dateFormatter);

// For advanced example which allows you to customize how tweet time is
// formatted you simply define a function which takes a JavaScript date as a
// parameter and returns a string!
// See http://www.w3schools.com/jsref/jsref_obj_date.asp for properties
// of a Date object.
function dateFormatter(date) {
  return date.toTimeString();
}