var header = document.getElementById("myDIV");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  current[0].className = current[0].className.replace(" active", "");
  this.className += " active";
  });
}

var tucson=document.getElementById("tucson");
var elantra=document.getElementById("elantra");
var creta=document.getElementById("creta");
var venue=document.getElementById("venue");
var grand_i10=document.getElementById("grand_i10");

tucson.style.display = "block";
elantra.style.display = "block";
creta.style.display = "block";
venue.style.display = "block";
grand_i10.style.display = "block";
verna.style.display = "block";

tucson.style.display = "none";
elantra.style.display = "none";
creta.style.display = "none";
venue.style.display = "none";
grand_i10.style.display = "none";
verna.style.display = "none";

function myFunction(param)
{

if (param == "tucson"){
	tucson.style.display = "block";
	elantra.style.display = "none";
	creta.style.display = "none";
	venue.style.display = "none";
	grand_i10.style.display = "none";
	verna.style.display = "none";
}else if (param == "elantra"){

	elantra.style.display = "block";
	tucson.style.display = "none";
	creta.style.display = "none";
	venue.style.display = "none";
	grand_i10.style.display = "none";
	verna.style.display = "none";

}else if (param == "creta"){
	creta.style.display = "block";
	tucson.style.display = "none";
	elantra.style.display = "none";
	venue.style.display = "none";
	grand_i10.style.display = "none";
}else if (param == "venue"){
	venue.style.display = "block";
	tucson.style.display = "none";
	elantra.style.display = "none";
	creta.style.display = "none";
	grand_i10.style.display = "none";
	verna.style.display = "none";
}else if (param == "grand_i10"){
	grand_i10.style.display = "block";
	tucson.style.display = "none";
	elantra.style.display = "none";
	creta.style.display = "none";
	venue.style.display = "none";
	verna.style.display = "none";

}else if (param == "verna"){

	tucson.style.display = "none";
	elantra.style.display = "none";
	creta.style.display = "none";
	venue.style.display = "none";
	verna.style.display = "block";
	grand_i10.style.display = "none";
}else{
	alert("nothing");
}
}
