function findRhymes(word) {
	if (typeof findRhymes.rhymeArray == 'undefined') {
		findRhymes.baseWord = word;
		findRhymes.rhymeArray = null;
	}
	var url = "http://rhymebrain.com/talk?function=getRhymes&word=".concat(word);
	
	ajax_simple_get(url, "", false, function (_responseText)
		{
			
			var response = jQuery.parseJSON(_responseText);
			if (rhymeArray != null)
			{
				findRhymes.baseWord = word;
				findRhymes.rhymeArray = response;
			}
		});
	
	
}