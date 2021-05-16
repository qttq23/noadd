
(()=>{


	const xpathBtnSkip = '//*[@id="skip-button:6"]/span/button';
	const xpathDivAd = '//*[@id="movie_player"]/div[4]';
	let isMutable = true;
	function getElementByXpath(path) {
		return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
	}
	function skipAd() {
		let btnSkip = getElementByXpath(xpathBtnSkip);
		if(btnSkip) {
			console.log('found skip btn');
			btnSkip.click();
		}
	}
	function muteAd() {
		let divAd = getElementByXpath(xpathDivAd);

		if(!divAd) {
			console.log('not foudn divad');
			isMutable = true;
			return;
		} 

		if(divAd.childNodes.length > 0) {
			console.log('>0');
			let btnMute = getElementByXpath('//*[@id="movie_player"]/div[25]/div[2]/div[1]/span/button');
			if(btnMute) {
				console.log('found mute btn');
				if(btnMute.getAttribute('aria-label') == 'Mute (m)') {
					console.log('mute');
					if(isMutable == true) {
						console.log('about to mute ad');
						btnMute.click();
						isMutable = false;

					}
				}
			}
		}
		else {
			isMutable = true;
		}
	}


	// muteAd();
	skipAd();
	setInterval(()=>{
		// muteAd();
		skipAd();
	}, 100);

	console.log('set interval');

})();
