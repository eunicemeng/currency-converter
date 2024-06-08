// Welcome to the Currency Converter!
// We have imported the 'sync-input' package for you.
// You will use this in later stages.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));

const input = require("sync-input");

// Introducing user to the program and what it can do
console.log("Welcome to Currency Converter!");
console.log("1 USD equals 1 USD");
console.log("1 USD equals 113.5 JPY");
console.log("1 USD equals 0.89 EUR");
console.log("1 USD equals 74.36 RUB");
console.log("1 USD equals 0.75 GBP");

const availableCurrencies = ["USD", "JPY", "EUR", "RUB", "GBP"];
let fromCurrency;
let toCurrency;
let amount;
let convertedAmount;

try {
	// Check if user wants to exit or continue
	checkWhetherToExit();

	// Getting desired currencies and validating them
	checkCurrencyAvailability();

	// Getting desired amount and validating it
	checkAmountValidity();

} catch (error) {
	console.log(error);
	return;
}

convertCurrency(fromCurrency, toCurrency);

function checkWhetherToExit() {
	console.log("What do you want to do?");
	console.log("1-Convert currencies 2-Exit program");

	let userChoice = input();
	switch (userChoice) {
		case "1":
			return;
		case "2":
			console.log("Have a nice day!");
			process.exit(0);
		default:
			console.log("Unknown input");
			checkWhetherToExit();
	}
}

function checkCurrencyAvailability(currency) {
	console.log("What do you want to convert?");
	fromCurrency = input("From: ").toUpperCase();
	if (!availableCurrencies.includes(fromCurrency)) {
		console.log("Unknown currency");
		checkCurrencyAvailability();
	}

	toCurrency = input("To: ").toUpperCase()
	if (!availableCurrencies.includes(toCurrency)) {
		console.log("Unknown currency");
		checkCurrencyAvailability();
	}
}

function checkAmountValidity() {
	amount = Number(input("Amount: "));
	if (typeof amount != "number" || isNaN(amount)) {
		console.log("The amount has to be a number");
		checkAmountValidity();
	} else if (amount < 1) {
		console.log("The amount cannot be less than 1");
		checkAmountValidity();
	} else {
		return;
	}
}

function convertCurrency(initalCurrency, finalCurrency) {

	// First, convert to USD
	let amountInUSD;
	switch (initalCurrency) {
		case "USD":
			amountInUSD = amount;
			break;
		case "JPY":
			amountInUSD = amount / 113.5;
			break;
		case "EUR":
			amountInUSD = amount / 0.89;
			break;
		case "RUB":
			amountInUSD = amount / 74.36;
			break;
		case "GBP":
			amountInUSD = amount / 0.75;
			break;
	}

	// Next, convert from USD to desired currency
	switch (finalCurrency) {
		case "USD":
			convertedAmount = amountInUSD * 1;
			break;
		case "JPY":
			convertedAmount = amountInUSD * 113.5;
			break;
		case "EUR":
			convertedAmount = amountInUSD * 0.89;
			break;
		case "RUB":
			convertedAmount = amountInUSD * 74.36;
			break;
		case "GBP":
			convertedAmount = amountInUSD * 0.75;
			break;
	}

	console.log(
		`Result: ${amount} ${fromCurrency} equals ${convertedAmount.toFixed(4)} ${toCurrency}`,
	);
}


