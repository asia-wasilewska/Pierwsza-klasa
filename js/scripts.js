function Telefon(marka, cena, kolor) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
}
Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ".");
}

var SamsungGalaxyS6 = new Telefon("Gal", 2000, "biały");
var iPhone6S = new Telefon("Apple", 2250, "srebrny");
var OnePlusOne = new Telefon("One", 5000, "złoty");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();