const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();

	await page.goto("https://web-based-reume-front.onrender.com?resumeonly=true", {
		waitUntil: "networkidle2"
	});


	await page.pdf({
		path: "public/resume.pdf",
		format: "Letter",
		printBackground: true
	});

	await browser.close();
})();