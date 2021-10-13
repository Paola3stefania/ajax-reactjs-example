import axios from "axios";

export default async function getData(fullpath) {
	try {
		let result = {
			all: [],
			single: {},
			next: null,
			pages: 0,
		};

		const client = axios.create({
			url: fullpath,
		});

		console.log("Getting data from API in: ", fullpath);

		const response = await client.get(); //obj
		response.data.results
			? (result = {
					all: response.data.results,
					next: response.data.info.next,
					pages: response.data.info.pages,
			  })
			: (result.single = response.data);
		console.log("The data...", result);
		return result;
	} catch (error) {
		console.log(error.response, "error");
	}
}
