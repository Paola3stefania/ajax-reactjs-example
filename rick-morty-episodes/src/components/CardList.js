import React, { Component } from "react";
import { Card } from "react-bootstrap";
import getData from "../utils/getData";
import { NavLink } from "react-router-dom";
export default class CardList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			all: [],
			single: {},
			next: null,
			pages: 0,
			image: false,
			modelist: false,
			name: "",
			relpath: "/",
			params: [],
		};
	}

	async componentDidMount() {
		const { relpath, modelist, image, params, name } = this.props;
		const result = await getData(relpath);

		this.setState({
			modelist: modelist,
			relpath: relpath,
			params: params,
			image: image,
			name: name,
			...result,
		});
	}

	render() {
		const { single, all, next, pages, relpath, params, image } = this.state;

		all.push(single);
		console.log("sy todo lo q hay q renerizar", all);

		console.log(`Obteniendo ${pages} paginas , next is ${next}, y el pathURI es ${relpath},
		y params son ${params}`);

		return (
			<>
				{
					<div key="card_container_single" className="d-flex flex-wrap">
						{all.map((obj) => (
							<Card style={{ width: "18rem" }} key={`single_card_${obj["id"]}`}>
								{image && <Card.Img variant="top" src={`${obj["image"]}`} />}
								<Card.Body>
									<Card.Title>
										<NavLink
											className="card-link"
											to={`${relpath}/${obj["id"]}`}
										>
											{obj["name"]}
										</NavLink>
									</Card.Title>
									{Object.keys(obj)
										.filter((key) => (params.includes(key) ? key : null))
										.map((key) => (
											<>
												<Card.Text key={key}>
													{key}:
													{typeof obj[key] !== "object"
														? obj[key]
														: Object.values(obj[key]).map((newKey) => newKey)}
												</Card.Text>
											</>
										))}
								</Card.Body>
							</Card>
						))}
					</div>
				}
			</>
		);
	}
}
