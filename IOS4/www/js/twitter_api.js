function getTweets(q) 
{
	var rpp = 5;
	var	twurl = "http://search.twitter.com/search.json?q=";
	$.getJSON(twurl + q + "&rpp=" + rpp + "&callback=?", function(data)
	{
		$("#tmpl-tweets").tmpl(data.results).appendTo("#tweets");
	});
}