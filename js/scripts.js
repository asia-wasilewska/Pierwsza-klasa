function Telefon(marka, cena, kolor, aparat) {
	this.marka = marka; 
	this.cena = cena;
	this.kolor = kolor;
  this.aparat = aparat;
}

Telefon.prototype.printInfo = function() {
	console.log("Marka telefonu to " + this.marka + ", kolor to " + this.kolor + ", a cena to " + this.cena + ". Aparat: " + this.aparat + ".");
}

var SamsungGalaxyS6 = new Telefon("Gal", 2000, "biały", "13 MPx f/1.9 AF");
var iPhone6S = new Telefon("Apple", 2250, "srebrny", "16 MPx f/1.9");
var OnePlusOne = new Telefon("One", 5000, "złoty", "14 MPx f/1.9");

SamsungGalaxyS6.printInfo();
iPhone6S.printInfo();
OnePlusOne.printInfo();