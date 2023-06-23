const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const rPage = await browser.newPage();
	const cPage = await browser.newPage();

	await rPage.goto("https://web-based-reume-front.onrender.com?resumeonly=true", {
		waitUntil: "networkidle2"
	});


	await rPage.pdf({
		path: "resume.pdf",
		format: "Letter",
		printBackground: true
	});

	await cPage.goto("https://web-based-reume-front.onrender.com?coveronly=true", {
		waitUntil: "networkidle2"
	});


	await cPage.pdf({
		path: "cover.pdf",
		format: "Letter",
		printBackground: true
	});

	await browser.close();
})();