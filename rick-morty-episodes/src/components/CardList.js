import React, { Component } from "react";
import { Card, Container, Col, Row } from "react-bootstrap";
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
			pageKey: "/",
			relpath: "/",
			params: [],
		};
	}

	async componentDidMount() {
		const { relpath, modelist, pageKey, image, params } = this.props;
		const result = await getData(relpath);

		this.setState({
			pageKey: pageKey,
			modelist: modelist,
			relpath: relpath,
			params: params,
			image: image,
			...result,
		});
	}

	//* TODO que lea todas pages, ya tengo pages y next. algo como until next is null ...tata

	render() {
		const {
			single,
			all,
			next,
			pages,
			modelist,
			pageKey,
			relpath,
			params,
			image,
		} = this.state;

		return (
			<>
				<h3>
					Obteniendo {pages} paginas , next is {next}, y el pathURI es {relpath}
					, y params son {params}
				</h3>
				{Object.keys(single).length > 0 && (
					<>
						<Card style={{ width: "18rem" }}>
							{image && <Card.Img variant="top" src="" />}
							<Card.Body>
								<Card.Link href="#">Card Link</Card.Link>
								<Card.Title>Card Title</Card.Title>
								<Card.Subtitle className="mb-2 text-muted">
									Card Subtitle
								</Card.Subtitle>
								<Card.Text>Texto de la card</Card.Text>
							</Card.Body>
						</Card>
						<ul>
							<h2>Single Object</h2>
							{Object.keys(single).map((key) => (
								<li key={key}>
									{key} : {single[key]}
								</li>
							))}
						</ul>
					</>
				)}
				{modelist && (
					<div>
						<h1>List Of Objects</h1>
						{all.map((obj) => (
							<Card style={{ width: "18rem" }} key={`single_${obj["id"]}`}>
								{image && <Card.Img variant="top" src={`${obj["image"]}`} />}
								<Card.Body>
									Single Obj List
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
				)}
			</>
		);
	}
}
