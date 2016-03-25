var RegexSociete = new RegExp("^[a-zA-Z0-9._-]+$");
Societe = document.getElementById("Societe");

var RegexContact = new RegExp("^[a-zA-Z0-9._-]+$");
Contact = document.getElementById("Contact");

var Adresse = document.getElementById("Adresse");

var RegexPostal = new RegExp("^[0-9][0-9][0-9][0-9][0-9]$");
Postal = document.getElementById("Postal");

var RegexVille = new RegExp("^[a-zA-Z0-9._-]+$");
Ville = document.getElementById("Ville");

var RegexEmail = new RegExp("^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$");
Email = document.getElementById("Email");

var Telephone = document.getElementById("Telephone");

var Environnement = document.getElementById("Environnement");

var Choix = document.getElementById("Choix");

var ClickButton = document.getElementById("submit");

var VerifSociete = function(){		
		if (RegexSociete.test(Societe.value) == true){
		    alert("Nom de société ok");
		}
		else {
		    alert("Vérifiez le nom de société");
		}		
}
var VerifContact = function(){
		if (RegexContact.test(Contact.value) == true){
		    alert("Nom du contact ok");
		}
		else {
		    alert("Vérifiez le nom du contact");
		}		
}
var VerifPostal = function(){
		if (RegexPostal.test(Postal.value) == true){
		    alert("Code postal ok");
		}
		else {
		    alert("Le code postal doit comporter 5 chiffres");
		}	
}
var VerifVille = function(){
		if (RegexVille.test(Ville.value) == true){
		    alert("Ville ok");
		}	
		else {
		    alert("Vérifiez la ville");
		}
}
var VerifEmail = function(){
		if (RegexEmail.test(Email.value) == true){
		    alert("E-mail ok");
		}
		else {
		    alert("L'e-mail doit contenir un @ et un .");
		}
}

var Copie = function() {
	var Choix = document.getElementById("Choix");
	var text = document.getElementById("Environnement");
	text = Choix.options[Choix.selectedIndex].value;
} 

ClickButton.addEventListener("click", function() {
	VerifSociete();
	VerifContact();
	VerifPostal();
	VerifVille();
	VerifEmail();
	Copie();
});

