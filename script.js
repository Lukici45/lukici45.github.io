	// Depozit novca
	// Broj linija na koji se kladi neko
	// Uloziti odredjni bet
	// pokrenuti slot
	// Proveriti da li je korisnik dobio
	// Dati korisniku osvojenu sumu
	// Igrati opet
	
	// const prompt = require("prompt-sync")();
	
	// const deposit = () => {
		// const depostiAmount = prompt("Unesite iznos: ");
	// };
	
	// deposti();
	
	const prompt = require("prompt-sync")();

	const deposit = () => {
		const depositAmount = prompt("Unesite iznos: ");
		console.log(`Uplata iznosi: ${depositAmount}`);
	};

	deposit();
