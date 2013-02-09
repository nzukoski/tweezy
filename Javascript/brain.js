
function rap(_term, _rhyme, _count)
{
	console.log("COUNT: " + _count);
	_count--;
	if(_count <= 0)
	{
		return;	
	}
	
	getRhymingWords(_rhyme);
	
	var bestTweet = null;
	var holdTheRhymes = findRhymes.rhymeArray;
	for (i = 0; i < findRhymes.rhymeArray.length; i++) {
		bestTweet = getGoodTweet(_term, findRhymes.rhymeArray[i]);
		if (bestTweet != null) break;
	}
	
	if ((bestTweet == null || typeof bestTweet == "undefined") && _count > 0)
	{
		waitToRap(_term, null, _count);
	}
	else
	{
		console.log("BESTTWEET: "+bestTweet);
		//rapTweet(bestTweet);
		//console.log(tweetArray);
		
		var lastWord = getLastWord(bestTweet);
		
		setTimeout(function() {
			if (_count > 0)
			{
				rap(_term, lastWord, _count);
			}
		}, 1000);
	
	}
	
	
}

function waitToRap(_term, _rhyme, _count)
{
	setTimeout(function() {
		rap(_term, _rhyme, _count);	
	}, 1000);
}


function chooseBestTweet() 
{
	if ( tweetArray.length > 0 )
	{
		return tweetArray[0];
	}
	else
	{
		return null;	
	}
}

function rapTweet(_tweet)
{
	//do speech stuff
}

function getLastWord(_tweet)
{
	if(_tweet != null && _tweet.length > 0)
	{
		return _tweet.substring(_tweet.lastIndexOf(" ")+1);
	}
	else
	{
		return null;	
	}
}


function getBestRhymingWord(_rhymingWords)
{
	if(_rhymingWords.length > 0) 
	{
		return _rhymingWords[0].word;
	}
	else 
	{
		return null;	
	}
}

/* getGoodTweet(_term, _rhyme)
 * Does a twitter fetch searching for _term + _rhyme
 * Then goes through and tries to find a tweet with the rhyme towards the end
 * returns either a good tweet string or null
*/
function getGoodTweet(_term, _rhyme)
{
	if(_rhyme == null)
	{
		_rhyme = "";
	}
	for ( var i = 0; i < 5; i++)
	{
		fetchNewTweets(_term.concat(" "+_rhyme));
		cleanTweets();
		if ( tweetArray != null)
		{
			break;	
		}
	}
	
	//Found nothing
	if ( tweetArray == null )
	{
		return null;	
	}
	var tweetOut = null;
	//find a tweet with the rhyme at the end
	for (var t = 0; t < tweetArray.length; t++) {
		var curTweet = tweetArray[t];
			
		var parts = curTweet.split(" ");
		idx = jQuery.inArray(_rhyme, parts);
		if ((idx < 5 && parts.length > 5) || idx == -1) continue;
		
		tweetOut = parts[0];
		for ( j = 1; j < idx; j++)
			tweetOut.concat(" ").concat(parts[j]);
		break;
	
	}
	
	return tweetOut;	
	
}

function truncateToTerm(_term)
{
	for (index in tweetArray)
	{
		var tempTweet = tweetArray[index];
		
		tempTweet = tempTweet.substring(tempTweet.indexOf(_term), tempTweet.length);
		tweetArray[index] = tempTweet;
	}	
}
