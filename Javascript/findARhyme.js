function findRhymes(word) {
	if (typeof findRhymes.rhymeArray == 'undefined') {
		findRhymes.baseWord = word;
		findRhymes.rhymeArray = null;
	}
	var url = "http://rhymebrain.com/talk?function=getRhymes&word=".concat(word);
	findRhymes.rhymeArray = [];
	ajax_simple_get(url, "", true, function (_responseText)
		{
			var response = jQuery.parseJSON(_responseText);
			findRhymes.baseWord = word;
			findRhymes.rhymeArray = response;
		});
	
}

function getRhymingWords(word) {
	findRhymes(word);
}


function findRhymingTweet(rhyme, subject) {
	findRhymes(rhyme);
	var tweetOut = null;
	
	for (i = 0; i < findRhymes.rhymeArray.length; i++) {
		
		fetchNewTweets(subject.concat(" ").concat(rhyme));
		
		for ( t = 0; t < tweetArray.length; t++) {
			var curTweet = tweetArray[t];
			
			var parts = curTweet.split(" ");
			idx = jQuery.inArray(rhyme, parts);
			if ((idx < 5 && parts.length > 5) || idx == -1) continue;
			
			tweetOut = parts[0];
			for ( j = 1; j < idx; j++)
				tweetOut.concat(" ").concat(parts[j]);
			break;
		}
		
		if (tweetOut != null)
			return tweetOut;
	}
	return "whoops";

}