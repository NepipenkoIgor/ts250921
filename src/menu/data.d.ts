export declare const list: {
	title: string;
	items: {
		title: string;
		items: (
			| {
					title: string;
					items?: undefined;
			  }
			| {
					title: string;
					items: {
						title: string;
					}[];
			  }
		)[];
	}[];
}[];
