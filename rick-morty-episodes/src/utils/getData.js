import axios from "axios";

export default async function getData(relpath) {
	try {
		let result = {
			all: [],
			single: {},
			next: null,
			pages: 0,
		};

		const client = axios.create({
			baseURL: "https://rickandmortyapi.com/api",
		});

		console.log("Getting data from API in: ", relpath);

		const response = await client.get(relpath); //obj
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
