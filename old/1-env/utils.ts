Object.defineProperty(window, 'MySweetApp', { value: 'v1.0.0', writable: true });

function deliveryMethod() {
	// TODO
	return 'overnight';
}

function shipWeight() {
	const el: HTMLElement | null = document.getElementById('weight');
	if (!el) {
		return 0;
	}
	return parseInt(el.innerHTML);
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function sendUpdates(emailAddr: string | string[]) {
	function sendEmail(addr: string) {
		console.log(`Shipping to ${addr} via ${deliveryMethod() || 'standard'} delivery`);

		if (shipWeight() > 100) {
			console.log('WARNING: Oversize package');
		}
	}

	if (Array.isArray(emailAddr)) {
		emailAddr.forEach((val, _idx) => {
			sendEmail(val.trim());
		});
	} else {
		sendEmail(emailAddr.trim());
	}
}
