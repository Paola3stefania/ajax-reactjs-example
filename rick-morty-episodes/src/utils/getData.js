import axios from "axios";

export default async function getData(relpath) {
	console.log("doing the axios");
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

		const response = await client.get(relpath); //obj
		response.data.results
			? (result = {
					all: response.data.results,
					next: response.data.info.next,
					pages: response.data.info.pages,
			  })
			: (result.single = response);
		console.log("im the result", result);
		return result;
	} catch (error) {
		console.log(error.response, "error");
	}
}
