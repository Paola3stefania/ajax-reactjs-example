import axios from "axios";
import React, { Component } from "react";

export default class Data extends Component {
	constructor(props) {
		super(props);
		this.state = {
			single: {},
			all: [],
			pages: 0,
			next: null,
		};
	}

	async componentDidMount() {
		const client = axios.create({
			baseURL: "https://rickandmortyapi.com/api",
		});

		try {
			const { relPath } = this.props;

			const response = await client.get(relPath); //obj
			response.data.results
				? this.setState({
						all: response.data.results,
						pages: response.data.info.pages,
						next: response.data.info.next,
				  })
				: this.setState({ single: response.data });
		} catch (error) {}
	}

	render() {
		const { single, all, pages, next } = this.state;

		return (
			<div>
				<h3>
					Obteniendo {pages} paginas , next is {next}
				</h3>
				{Object.keys(single).length > 0 && (
					<ul>
						<h2>Single Object</h2>
						{Object.keys(single).map((key) => (
							<li key={key}>
								{key} : {single[key]}
							</li>
						))}
					</ul>
				)}
				{all.length > 0 && (
					<div>
						<h1>List Of Objects</h1>
						{all.map((obj) => (
							<ul key={`single_${obj["id"]}`}>
								Single Obj from List
								{Object.keys(obj).map((key) => (
									<li key={key}>
										{key} :
										{typeof obj[key] !== "object"
											? obj[key]
											: Object.values(obj[key]).map((newKey) => newKey)}
									</li>
								))}
							</ul>
						))}
					</div>
				)}
			</div>
		);
	}
}
