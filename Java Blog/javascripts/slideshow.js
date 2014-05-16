var step=1;
function slideit()
{
	document.images.slide.src = eval("image"+step+".src");
	if(step<2)
		step++;
	else
		step=1;
	setTimeout("slideit()",2700); //Set the time between imgage change
	}
	slideit();