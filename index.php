<?php
/*********************** Include this in every PHP page ***********************/
//Set the directory path to file root
set_include_path($_SERVER["DOCUMENT_ROOT"]);
/******************************************************************************/

?> 

<!DOCTYPE HTML>
<html>
<head>
<meta charset="UTF-8">
<title>Tweezy taught me</title>
<script src="//ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js" type="text/javascript"></script>
<script src="Common/ajax_helper.js" type="text/javascript"></script>
<script src="Javascript/findARhyme.js" type="text/javascript"></script>
<script type="text/javascript" src="mespeak/mespeak.js"></script>
</head>

<body>
<script type="text/javascript">
var speakOptions
var amp = 100;
var pitch = 100;
var options = new Object();
//var str = "Eating a whole bag of pixi sticks, Showing off my six-pack, Going out with the intentions of never coming back, I have one white sock on and one black. We are the fuckin men not ready for bed, And with that being said, yeah heard that I head,";
var str = "walmart with no shoes on, Goin till the break o' dawn, I dyed a strand of my hair red, just jammin' some carry under wood as if i don't care about my street cred, Who needs good grades when you've got swag, Being more lazy than the guy who drew Japan's flag";

options.amplitude = 100;
options.pitch = 50;
options.wordgap = 0;
options.speed = 150;
meSpeak.loadConfig("mespeak/mespeak_config.json");
meSpeak.loadVoice("mespeak/voices/en/en-us.json");
//findRhymes("hello");

//meSpeak.speak(findRhymes.rhymeArray[0].word, {);

meSpeak.speak(str, options);
console.log("hi");


</script>
Bird goes here
</body>
</html>