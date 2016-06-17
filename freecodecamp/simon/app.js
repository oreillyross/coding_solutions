


const redSound = 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3', 
      blueSound = 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3', 
      greenSound = 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3', 
      yellowSound = 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3';



$(document).ready(function() {
	
	// Switch toggle
	$('.Switch').click(function() {
		$(this).toggleClass('On').toggleClass('Off');
	});
	
});